import { IRoutes } from "@/interfaces/routes-interface";
import {
  DollarSign,
  Home,
  Bot,
  User2,
  HelpCircle,
  BaggageClaim,
  Unplug,
} from "lucide-react";

export const routes: IRoutes[] = [
  {
    icon: <Home size={24} />,
    name: "Página Incial",
    url: "/",
  },
  {
    icon: <Bot size={24} />,
    name: "Bot",
    url: "/bot",
  },
  {
    icon: <DollarSign size={24} />,
    name: "Financeiro",
    url: "/finance",
  },
  {
    icon: <User2 size={24} />,
    name: "Conta",
    url: "/account/22",
  },
  {
    icon: <BaggageClaim size={24} />,
    name: "Planos",
    url: "/plans",
  },
  {
    icon: <Unplug size={24} />,
    name: "Integrações",
    url: "/integrations",
  },
  {
    icon: <HelpCircle size={24} />,
    name: "Ajuda",
    url: "/help",
  },
];
