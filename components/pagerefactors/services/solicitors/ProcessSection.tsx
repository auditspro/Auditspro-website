"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Handle,
  Position,
  Node,
  Edge,
  useReactFlow,
  ReactFlowProvider,
  applyNodeChanges,
  applyEdgeChanges,
  Panel,
  OnNodesChange,
  OnEdgesChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  Motion,
  motionVariants,
  motionTransitions,
  motionViewport,
} from "@/components/ui/motion";
import {
  DocumentTextIcon,
  MagnifyingGlassIcon,
  DocumentCheckIcon,
  ClockIcon,
  CheckCircleIcon,
  CreditCardIcon,
  ArrowRightIcon,
  UserIcon,
  InformationCircleIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

// Type definitions
interface FlowNodeData {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  badge?: string;
  badgeColor?: string;
  detail?: string;
  detailColor?: string;
  borderColor: string;
  details: string;
}

interface CustomNodeData extends Record<string, unknown> {
  node: FlowNodeData;
  isComplete: boolean;
  onClick: (nodeData: FlowNodeData) => void;
}

// Custom Node Component with proper typing
function CustomFlowNode({ data }: { data: CustomNodeData }) {
  const { node, isComplete, onClick } = data;

  return (
    <div
      className="relative group cursor-pointer"
      onClick={() => onClick(node)}
    >
      <Handle type="target" position={Position.Top} className="!opacity-0" />

      <div
        className={`rounded-xl lg:rounded-2xl border-2 ${node.borderColor} ${
          isComplete
            ? "bg-gradient-to-br from-green-50/30 to-white"
            : "bg-white"
        } p-4 shadow-md hover:shadow-2xl transition-all duration-500 ease-out w-[180px] hover:scale-105`}
      >
        <div
          className={`absolute inset-0 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-out ${
            isComplete
              ? "bg-gradient-to-br from-green-50/20"
              : "bg-gradient-to-br from-brand-50/20"
          } to-transparent pointer-events-none`}
        />

        <div className="relative z-10">
          <div
            className={`inline-flex rounded-lg ${node.iconBg} p-2.5 mb-2.5 group-hover:scale-110 transition-transform duration-300 ease-out`}
          >
            <node.icon className={`size-5 ${node.iconColor}`} />
          </div>

          {node.badge && (
            <div
              className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-2 border ${node.badgeColor}`}
            >
              {node.badge}
            </div>
          )}
          {node.detail && (
            <div
              className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-2 border ${node.detailColor}`}
            >
              {node.detail}
            </div>
          )}

          <h3
            className={`font-bold mb-1 text-sm ${
              isComplete ? "text-green-900" : "text-brand-950"
            }`}
          >
            {node.title}
          </h3>
          <p className="text-xs font-medium mb-1.5 text-brand-600">
            {node.subtitle}
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            {node.description}
          </p>
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} className="!opacity-0" />
    </div>
  );
}

const nodeTypes = {
  custom: CustomFlowNode,
};

// Flow nodes data for legal practice audits
const flowNodesData: Record<string, FlowNodeData> = {
  start: {
    title: "Legal Practice Inquiry",
    subtitle: "Initial Contact",
    description: "Submit your legal practice audit requirements",
    icon: UserIcon,
    iconBg: "bg-brand-100",
    iconColor: "text-brand-700",
    badge: "Start Here",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    borderColor: "border-brand-300",
    details:
      "Contact us with your legal practice details and trust account audit requirements. We'll provide initial consultation and scope assessment. Average response time: 24 hours.",
  },
  review: {
    title: "Trust Account Review",
    subtitle: "Expert Analysis",
    description: "IPA qualified auditors examine your legal records",
    icon: MagnifyingGlassIcon,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
    detail: "24-48 hours",
    detailColor: "bg-purple-50 text-purple-700 border-purple-200",
    borderColor: "border-purple-300",
    details:
      "Our IPA-qualified auditors with legal practice expertise thoroughly review your trust account records, client fund management, and compliance procedures.",
  },
  compliance: {
    title: "Law Society Compliance",
    subtitle: "Legal Assessment",
    description: "Comprehensive Law Society compliance review",
    icon: ScaleIcon,
    iconBg: "bg-brand-100",
    iconColor: "text-brand-700",
    detail: "State-specific",
    detailColor: "bg-brand-50 text-brand-700 border-brand-200",
    borderColor: "border-brand-300",
    details:
      "We verify compliance with Law Society requirements and Legal Profession Uniform Law. This includes trust account procedures, client money handling, and regulatory reporting requirements.",
  },
  report: {
    title: "Legal Audit Report",
    subtitle: "Final Delivery",
    description: "Law Society compliant audit report with findings",
    icon: DocumentCheckIcon,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    detail: "5-10 days",
    detailColor: "bg-amber-50 text-amber-700 border-amber-200",
    borderColor: "border-amber-300",
    details:
      "You receive a comprehensive Law Society compliant audit report with detailed findings, recommendations, and compliance certification. Reports are submission-ready for regulatory authorities.",
  },
  complete: {
    title: "Law Society Compliant",
    subtitle: "Certification",
    description: "Your legal practice audit is complete and compliant",
    icon: CheckCircleIcon,
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    badge: "Complete",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    borderColor: "border-green-300",
    details:
      "Congratulations! Your legal practice trust account audit is complete and fully Law Society compliant. You'll receive your certification and can proceed with confidence.",
  },
};

// Auto-layout function
function getLayoutedElements(
  nodes: Node<CustomNodeData>[],
  direction = "LR"
): Node<CustomNodeData>[] {
  const isHorizontal = direction === "LR";
  const nodeWidth = 180;
  const nodeHeight = 200;
  const spacing = 120;

  return nodes.map((node, index) => {
    return {
      ...node,
      position: {
        x: isHorizontal ? index * (nodeWidth + spacing) : 50,
        y: isHorizontal ? 50 : index * (nodeHeight + 100),
      },
    };
  });
}

// Interactive Flow Component
function InteractiveFlowDiagram() {
  const { fitView } = useReactFlow();
  const [isMobile, setIsMobile] = useState(false);
  const [selectedNode, setSelectedNode] = useState<FlowNodeData | null>(null);

  // Handle node click
  const handleNodeClick = useCallback((nodeData: FlowNodeData) => {
    setSelectedNode(nodeData);
  }, []);

  // Define initial nodes with click handler
  const getInitialNodes = useCallback((): Node<CustomNodeData>[] => {
    return [
      {
        id: "1",
        type: "custom",
        position: { x: 0, y: 0 },
        data: {
          node: flowNodesData.start,
          isComplete: false,
          onClick: handleNodeClick,
        },
      },
      {
        id: "2",
        type: "custom",
        position: { x: 0, y: 0 },
        data: {
          node: flowNodesData.review,
          isComplete: false,
          onClick: handleNodeClick,
        },
      },
      {
        id: "3",
        type: "custom",
        position: { x: 0, y: 0 },
        data: {
          node: flowNodesData.compliance,
          isComplete: false,
          onClick: handleNodeClick,
        },
      },
      {
        id: "4",
        type: "custom",
        position: { x: 0, y: 0 },
        data: {
          node: flowNodesData.report,
          isComplete: false,
          onClick: handleNodeClick,
        },
      },
      {
        id: "5",
        type: "custom",
        position: { x: 0, y: 0 },
        data: {
          node: flowNodesData.complete,
          isComplete: true,
          onClick: handleNodeClick,
        },
      },
    ];
  }, [handleNodeClick]);

  const [nodes, setNodes] = useState<Node<CustomNodeData>[]>(() =>
    getInitialNodes()
  );
  const [edges, setEdges] = useState<Edge[]>([
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "smoothstep",
      animated: true,
      style: { stroke: "var(--color-brand-200)", strokeWidth: 2.5 },
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      type: "smoothstep",
      animated: true,
      style: { stroke: "var(--color-brand-200)", strokeWidth: 2.5 },
    },
    {
      id: "e3-4",
      source: "3",
      target: "4",
      type: "smoothstep",
      animated: true,
      style: { stroke: "var(--color-brand-200)", strokeWidth: 2.5 },
    },
    {
      id: "e4-5",
      source: "4",
      target: "5",
      type: "smoothstep",
      animated: true,
      style: { stroke: "var(--color-brand-200)", strokeWidth: 2.5 },
    },
  ]);

  // Handle node changes with proper typing
  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds) as Node<CustomNodeData>[]),
    []
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const direction = isMobile ? "TB" : "LR";

  useEffect(() => {
    const layoutedNodes = getLayoutedElements(getInitialNodes(), direction);
    setNodes(layoutedNodes);

    setTimeout(() => {
      fitView({ padding: 0.2, duration: 800 });
    }, 100);
  }, [direction, fitView, getInitialNodes]);

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        nodesDraggable={true}
        nodesConnectable={false}
        elementsSelectable={true}
        zoomOnScroll={true}
        panOnScroll={false}
        panOnDrag={true}
        zoomOnPinch={true}
        zoomOnDoubleClick={true}
        preventScrolling={true}
        className="bg-transparent"
        proOptions={{ hideAttribution: true }}
        minZoom={0.3}
        maxZoom={2}
      >
        <Background gap={20} size={1} color="var(--color-brand-200)" className="opacity-30" />
        <Controls
          position="bottom-right"
          showInteractive={false}
          className="!bg-white !border-brand-200 !rounded-lg !shadow-lg"
        />
        <MiniMap
          nodeColor={(node) => {
            if (node.id === "5") return "#dcfce7";
            return "#ffffff";
          }}
          className="!bg-white !border-2 !border-brand-200 !rounded-lg !shadow-lg"
          position="top-right"
        />

        {/* Info Panel */}
        <Panel
          position="top-left"
          className="bg-white border-2 border-brand-200/70 rounded-lg shadow-lg p-3 max-w-xs"
        >
          <div className="flex items-start gap-2">
            <InformationCircleIcon className="size-5 text-brand-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-brand-950 mb-1">
                Interactive Legal Audit Flow
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isMobile
                  ? "Pinch to zoom, drag to pan, tap nodes for details."
                  : "Zoom with scroll, drag to pan, click nodes for details, drag nodes to reposition."}
              </p>
            </div>
          </div>
        </Panel>

        {/* Selected Node Details Panel */}
        {selectedNode && (
          <Panel
            position="bottom-left"
            className="bg-white border-2 border-brand-200/70 rounded-lg shadow-xl p-4 max-w-sm"
          >
            <button
              onClick={() => setSelectedNode(null)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              ✕
            </button>
            <div className="flex items-start gap-3 mb-3">
              <div
                className={`inline-flex rounded-lg ${selectedNode.iconBg} p-2.5`}
              >
                <selectedNode.icon
                  className={`size-5 ${selectedNode.iconColor}`}
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-brand-950 mb-1">
                  {selectedNode.title}
                </h4>
                <p className="text-xs font-medium text-brand-600">
                  {selectedNode.subtitle}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedNode.details}
            </p>
          </Panel>
        )}
      </ReactFlow>
    </>
  );
}

export function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-brand-50/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Motion
          initial="hidden"
          whileInView="visible"
          viewport={motionViewport}
          variants={motionVariants.fadeInUp}
          transition={motionTransitions.smooth}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
              <ClockIcon className="size-4" />
              <span>Interactive Legal Process</span>
            </div>
          </div>

          <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-brand-950 leading-tight">
            Your Legal Practice Audit Journey
          </h2>
          <p className="mb-4 text-base lg:text-lg text-slate-600 leading-relaxed">
            From initial inquiry to Law Society compliance certification in{" "}
            <span className="font-semibold text-brand-600">
              5-10 business days
            </span>
            . Explore our streamlined{" "}
            <Link
              href="/services"
              className="text-brand-600 hover:text-brand-700 underline font-medium"
            >
              legal audit process
            </Link>{" "}
            - click any step for details.
          </p>

          <div className="mb-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium transition-colors duration-200"
            >
              View detailed legal audit guide
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </Motion>

        {/* Interactive Flow Diagram */}
        <div className="relative mb-12 mx-auto max-w-7xl">
          <div className="relative rounded-2xl lg:rounded-3xl border-2 border-brand-300/50 bg-gradient-to-br from-white via-brand-50/20 to-white p-6 sm:p-8 lg:p-12 shadow-lg">
            <div
              className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-20 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, var(--color-brand-200) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-brand-50/5 via-transparent to-purple-50/5 rounded-2xl lg:rounded-3xl pointer-events-none" />

            {/* Fully Interactive & Responsive Flow */}
            <div className="relative" style={{ height: "600px" }}>
              <ReactFlowProvider>
                <InteractiveFlowDiagram />
              </ReactFlowProvider>
            </div>
          </div>
        </div>

        {/* Benefits Bar */}
        <Motion
          initial="hidden"
          whileInView="visible"
          viewport={motionViewport}
          variants={motionVariants.fadeInUp}
          transition={{ ...motionTransitions.smooth, delay: 0.5 }}
          className="mb-12"
        >
          <div className="rounded-xl bg-white border border-brand-200/70 p-4 sm:p-6 shadow-sm">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="size-4 sm:size-5 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">
                  Law Society Compliant
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="size-4 sm:size-5 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">
                  Fixed Transparent Pricing
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="size-4 sm:size-5 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">
                  IPA Qualified Legal Auditors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="size-4 sm:size-5 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">
                  All Australian States
                </span>
              </div>
            </div>
          </div>
        </Motion>

        {/* CTA Section */}
        <Motion
          initial="hidden"
          whileInView="visible"
          viewport={motionViewport}
          variants={motionVariants.fadeInUp}
          transition={{ ...motionTransitions.smooth, delay: 0.6 }}
          className="text-center"
        >
          <div className="rounded-xl lg:rounded-2xl bg-gradient-to-r from-brand-50 to-brand-100/50 border border-brand-200/50 p-6 sm:p-8">
            <h3 className="mb-4 text-xl sm:text-2xl font-bold text-brand-950">
              Ready to Start Your Legal Practice Audit?
            </h3>
            <p className="mb-6 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of Australian legal professionals who trust us with their
              compliance requirements. Whether you need{" "}
              <Link
                href="/services/real-estate-agents"
                className="text-brand-600 hover:text-brand-700 underline font-medium"
              >
                real estate audits
              </Link>
              ,{" "}
              <Link
                href="/services/conveyancers"
                className="text-brand-600 hover:text-brand-700 underline font-medium"
              >
                conveyancer services
              </Link>
              , or{" "}
              <Link
                href="/services/solicitors"
                className="text-brand-600 hover:text-brand-700 underline font-medium"
              >
                legal profession audits
              </Link>{" "}
              - get your Law Society compliant audit completed fast.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link href="/contact">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-brand-900 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white font-medium shadow-sm transition-all hover:bg-brand-800 hover:shadow-md active:scale-95">
                  <CheckCircleIcon className="size-4 sm:size-5" />
                  Start Your Legal Audit
                </button>
              </Link>
              <Link href="/pricing">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-brand-200 bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-brand-950 font-medium shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300 active:scale-95">
                  <CreditCardIcon className="size-4 sm:size-5" />
                  View Pricing
                </button>
              </Link>
              <Link href="/how-it-works">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-brand-200 bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-brand-950 font-medium shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300 active:scale-95">
                  <DocumentTextIcon className="size-4 sm:size-5" />
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
