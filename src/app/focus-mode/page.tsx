import { AppLayout } from "@/components/AppLayout";

export default function FocusMode() {
  return (
    <AppLayout title="Focus Mode">
      <div className="h-96 border-2 border-dashed border-zinc-200 rounded-xl flex items-center justify-center">
        <p className="text-zinc-400">Dashboard Canvas Ready</p>
      </div>
    </AppLayout>
  );
}
