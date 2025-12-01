"use client";

import { memo, useCallback, useEffect, useState, useMemo } from "react";
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
  ShieldCheckIcon,
  DocumentCheckIcon,
  ClockIcon,
  CheckCircleIcon,
  CreditCardIcon,
  ArrowRightIcon,
  UserIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

// Constants
const MOBILE_BREAKPOINT = 768;
const FITVIEW_DELAY = 100;
const RESIZE_THROTTLE_DELAY = 150;
const NODE_WIDTH = 180;
const NODE_HEIGHT = 200;
const NODE_SPACING = 120;

const EDGE_STYLE = {
  type: "smoothstep" as const,
  animated: true,
  style: { stroke: "var(--color-brand-200)", strokeWidth: 2.5 },
};

const BACKGROUND_PATTERN_STYLE = {
  backgroundImage: `radial-gradient(circle, var(--color-brand-200) 1px, transparent 1px)`,
  backgroundSize: "20px 20px",
};

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

// Flow nodes data - defined outside component for better performance
const flowNodesData: Record<string, FlowNodeData> = {
  start: {
    title: "You Submit",
    subtitle: "Online Request",
    description: "Complete our simple form with business details",
    icon: UserIcon,
    iconBg: "bg-brand-100",
    iconColor: "text-brand-700",
    badge: "Start Here",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    borderColor: "border-brand-300",
    details:
      "Simply fill out our online form with your business details. Upload required documents securely through our platform. Average completion time: 10 minutes.",
  },
  review: {
    title: "Document Review",
    subtitle: "Expert Analysis",
    description: "IPA qualified auditors examine your records",
    icon: MagnifyingGlassIcon,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
    detail: "24-48 hours",
    detailColor: "bg-purple-50 text-purple-700 border-purple-200",
    borderColor: "border-purple-300",
    details:
      "Our IPA-qualified auditors thoroughly review your documents. We check for completeness, accuracy, and compliance with relevant regulations.",
  },
  compliance: {
    title: "Compliance Check",
    subtitle: "Regulatory Assessment",
    description: "Comprehensive regulatory compliance review",
    icon: ShieldCheckIcon,
    iconBg: "bg-brand-100",
    iconColor: "text-brand-700",
    detail: "State-specific",
    detailColor: "bg-brand-50 text-brand-700 border-brand-200",
    borderColor: "border-brand-300",
    details:
      "We verify compliance with regulatory requirements and state-specific regulations. This includes checking trust account procedures, record-keeping, and reporting requirements.",
  },
  report: {
    title: "Report Delivery",
    subtitle: "Final Output",
    description: "Detailed findings with recommendations",
    icon: DocumentCheckIcon,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    detail: "5-10 days",
    detailColor: "bg-amber-50 text-amber-700 border-amber-200",
    borderColor: "border-amber-300",
    details:
      "You receive a comprehensive audit report with detailed findings, recommendations, and action items. Reports are available in digital and print formats.",
  },
  complete: {
    title: "Fully Compliant",
    subtitle: "Certification",
    description: "Your audit is complete and compliant",
    icon: CheckCircleIcon,
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    badge: "Complete",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    borderColor: "border-green-300",
    details:
      "Congratulations! Your trust account audit is complete and fully regulatory compliant. You'll receive your certification and can proceed with confidence.",
  },
};

// Custom Node Component - memoized for performance
const CustomFlowNode = memo(({ data }: { data: CustomNodeData }) => {
  const { node, isComplete, onClick } = data;

  return (
    <div
      className="relative group cursor-pointer"
      onClick={() => onClick(node)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(node);
        }
      }}
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
});

CustomFlowNode.displayName = "CustomFlowNode";

const nodeTypes = {
  custom: CustomFlowNode,
};

// Auto-layout function - pure function for better testability
function getLayoutedElements(
  nodes: Node<CustomNodeData>[],
  direction: "LR" | "TB" = "LR"
): Node<CustomNodeData>[] {
  const isHorizontal = direction === "LR";

  return nodes.map((node, index) => {
    return {
      ...node,
      position: {
        x: isHorizontal ? index * (NODE_WIDTH + NODE_SPACING) : 50,
        y: isHorizontal ? 50 : index * (NODE_HEIGHT + 100),
      },
    };
  });
}

// Factory function to create initial nodes - memoized outside component
const createInitialNodes = (
  onClick: (nodeData: FlowNodeData) => void
): Node<CustomNodeData>[] => [
  {
    id: "1",
    type: "custom",
    position: { x: 0, y: 0 },
    data: {
      node: flowNodesData.start,
      isComplete: false,
      onClick,
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 0, y: 0 },
    data: {
      node: flowNodesData.review,
      isComplete: false,
      onClick,
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 0, y: 0 },
    data: {
      node: flowNodesData.compliance,
      isComplete: false,
      onClick,
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 0, y: 0 },
    data: {
      node: flowNodesData.report,
      isComplete: false,
      onClick,
    },
  },
  {
    id: "5",
    type: "custom",
    position: { x: 0, y: 0 },
    data: {
      node: flowNodesData.complete,
      isComplete: true,
      onClick,
    },
  },
];

// Initial edges - defined as constant
const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    ...EDGE_STYLE,
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    ...EDGE_STYLE,
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    ...EDGE_STYLE,
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    ...EDGE_STYLE,
  },
];

// Interactive Flow Component
function InteractiveFlowDiagram() {
  const { fitView } = useReactFlow();
  const [isMobile, setIsMobile] = useState(false);
  const [selectedNode, setSelectedNode] = useState<FlowNodeData | null>(null);

  // Stable click handler
  const handleNodeClick = useCallback((nodeData: FlowNodeData) => {
    setSelectedNode(nodeData);
  }, []);

  // Initialize nodes with memoized factory
  const [nodes, setNodes] = useState<Node<CustomNodeData>[]>(() =>
    createInitialNodes(handleNodeClick)
  );

  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  // Handle node changes with proper typing
  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds) as Node<CustomNodeData>[]),
    []
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  // Check if mobile with throttled resize listener
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    let timeoutId: NodeJS.Timeout;
    const throttledCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, RESIZE_THROTTLE_DELAY);
    };

    checkMobile();
    window.addEventListener("resize", throttledCheck);

    return () => {
      window.removeEventListener("resize", throttledCheck);
      clearTimeout(timeoutId);
    };
  }, []);

  const direction = useMemo<"LR" | "TB">(
    () => (isMobile ? "TB" : "LR"),
    [isMobile]
  );

  // Update layout when direction changes
  useEffect(() => {
    setNodes((prevNodes) => {
      // Update positions based on new direction
      const layoutedNodes = getLayoutedElements(prevNodes, direction);
      // Update the onClick handler for all nodes
      return layoutedNodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          onClick: handleNodeClick,
        },
      }));
    });

    // Reset selected node when layout changes
    setSelectedNode(null);

    // Fit view after layout change
    const timeoutId = setTimeout(() => {
      fitView({ padding: 0.2, duration: 800 });
    }, FITVIEW_DELAY);

    return () => clearTimeout(timeoutId);
  }, [direction, fitView, handleNodeClick]);

  // Mini map node color function
  const miniMapNodeColor = useCallback((node: Node) => {
    return node.id === "5" ? "#dcfce7" : "#ffffff";
  }, []);

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
          nodeColor={miniMapNodeColor}
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
                Interactive Flow
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
              aria-label="Close details panel"
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
              <span>Interactive Process</span>
            </div>
          </div>

          <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-brand-950 leading-tight">
            Your Trust Account Audit Journey
          </h2>
          <p className="mb-4 text-base lg:text-lg text-slate-600 leading-relaxed">
            From submission to compliance certification in{" "}
            <span className="font-semibold text-brand-600">
              5-10 business days
            </span>
            . Explore our streamlined{" "}
            <Link
              href="/services"
              className="text-brand-600 hover:text-brand-700 underline font-medium"
            >
              audit process
            </Link>{" "}
            - click any step for details.
          </p>

          <div className="mb-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium transition-colors duration-200"
            >
              View detailed process guide
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </Motion>

        {/* Interactive Flow Diagram */}
        <div className="relative mb-12 mx-auto max-w-7xl">
          <div className="relative rounded-2xl lg:rounded-3xl border-2 border-brand-300/50 bg-gradient-to-br from-white via-brand-50/20 to-white p-6 sm:p-8 lg:p-12 shadow-lg">
            <div
              className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-20 pointer-events-none"
              style={BACKGROUND_PATTERN_STYLE}
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
                  Fixed Transparent Pricing
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="size-4 sm:size-5 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">
                  No Hidden Fees
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="size-4 sm:size-5 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">
                  IPA Qualified Auditors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="size-4 sm:size-5 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">
                  All States Covered
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
              Ready to Start Your Trust Account Audit?
            </h3>
            <p className="mb-6 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of Australian professionals who trust us with their
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
              - get your regulatory compliant audit completed fast.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link href="/contact">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-brand-900 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white font-medium shadow-sm transition-all hover:bg-brand-800 hover:shadow-md active:scale-95">
                  <CheckCircleIcon className="size-4 sm:size-5" />
                  Start Your Audit
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
