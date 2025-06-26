import {
  FileText,
  Layers,
  AlertTriangle,
  ClipboardList,
  Upload,
  Calculator,
  Shield,
  BarChart3,
} from "lucide-react";

export default function Product() {
  const services = [
    {
      icon: FileText,
      title: "Blueprint Analysis",
      subtitle: "Intelligent Document Processing",
      desc: "Upload PDFs, images, or CAD files and let our AI extract all the critical details. Our advanced AI understands architectural conventions, complex symbols, and handwritten notes to deliver fast, accurate blueprint analysis.",
      features: [],
    },
    {
      icon: Layers,
      title: "Material Identification",
      subtitle: "Automated Quantity Takeoff",
      desc: "Instantly identify and quantify materials like concrete, steel, and insulation. Our AI calculates exact quantities, dimensions, and specifications while cross-referencing with current market prices and availability.",
      features: [],
    },
    {
      icon: AlertTriangle,
      title: "Roadblock Detection",
      subtitle: "Proactive Risk Management",
      desc: "Flag load-bearing conflicts, sequencing issues, and code violations before they become problems. Our AI analyzes structural integrity, compliance requirements, and construction feasibility in real-time.",
      features: [],
    },
    {
      icon: ClipboardList,
      title: "Summary Reporting",
      subtitle: "Actionable Insights",
      desc: "Get a clear, actionable report for your construction managers. Our AI generates comprehensive reports with prioritized recommendations, cost implications, and alternative solutions.",
      features: [],
    },
  ];

  return (
    <div className="section-padding pt-8 py-32">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Powerful AI Tools for{" "}
            <span className="text-gradient">Construction</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed">
            Streamline your construction workflow with our comprehensive
            AI-powered blueprint analysis platform. From initial planning to
            final execution, our tools help you build smarter, faster, and
            safer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="card p-6 text-center card-hover">
              <div className="flex justify-center mb-6">
                <service.icon className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-2">
                {service.title}
              </h3>
              <p className="text-primary font-semibold text-sm mb-4">
                {service.subtitle}
              </p>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center justify-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-xs text-text-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
