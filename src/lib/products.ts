import { MessageSquare, User, Clock, CheckCircle } from "lucide-react";

interface Feature {
  icon: React.ComponentType;
  text: string;
}

interface Product {
  name: string;
  description: string;
  features: Feature[];
}

export const products: Product[] = [
  {
    name: "ekiliSense",
    description: "Advanced sensing technology for real-time data collection.",
    features: [
      { icon: MessageSquare, text: "Real-time data collection" },
      { icon: User, text: "User-friendly interface" },
      { icon: Clock, text: "24/7 monitoring" },
      { icon: CheckCircle, text: "High accuracy" }
    ]
  },
  {
    name: "ekiliRelay",
    description: "Efficient data relay system for seamless communication.",
    features: [
      { icon: MessageSquare, text: "Seamless communication" },
      { icon: User, text: "Easy integration" },
      { icon: Clock, text: "Fast data transfer" },
      { icon: CheckCircle, text: "Reliable performance" }
    ]
  },
  {
    name: "ekiliConvo",
    description: "Interactive conversation platform for enhanced user engagement.",
    features: [
      { icon: MessageSquare, text: "Interactive platform" },
      { icon: User, text: "User engagement" },
      { icon: Clock, text: "Real-time responses" },
      { icon: CheckCircle, text: "Enhanced communication" }
    ]
  },
  {
    name: "Insights",
    description: "Comprehensive analytics tool for data-driven decision making.",
    features: [
      { icon: MessageSquare, text: "Data analytics" },
      { icon: User, text: "User insights" },
      { icon: Clock, text: "Historical data" },
      { icon: CheckCircle, text: "Decision support" }
    ]
  }
];
