import { User, Shield } from "lucide-react";

type CategoryIconType = "user" | "shield";
type CategoryColorVariant = "zinc" | "emerald";

interface TaskCategoryCardProps {
  category: string;
  icon: CategoryIconType;
  variant: CategoryColorVariant;
  items: string[];
}

export function TaskCategoryCard({
  category,
  icon,
  variant,
  items,
}: TaskCategoryCardProps) {
  // Determine icon component
  const getIcon = () => {
    switch (icon) {
      case "user":
        return <User className="w-4 h-4 text-zinc-400" />;
      case "shield":
        return <Shield className="w-4 h-4 text-zinc-400" />;
    }
  };

  // Determine styling based on color variant
  const getCardBorderClass = () => {
    switch (variant) {
      case "zinc":
        return "border-l-[4px] border-zinc-400";
      case "emerald":
        return "border-l-[4px] border-emerald-400";
    }
  };

  const getBulletColorClass = () => {
    switch (variant) {
      case "zinc":
        return "bg-zinc-400";
      case "emerald":
        return "bg-emerald-400";
    }
  };

  return (
    <div
      className={`bg-zinc-100/50 p-8 rounded-2xl border border-zinc-100 flex flex-col gap-4 ${getCardBorderClass()}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-[1.2px] text-zinc-500">
          {category}
        </span>
        {getIcon()}
      </div>
      <div className="flex flex-col gap-3 mt-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div
              className={`w-1.5 h-1.5 rounded-full shrink-0 ${getBulletColorClass()}`}
            />
            <span className="text-sm font-medium text-zinc-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
