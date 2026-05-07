import { CheckCircle2 } from "lucide-react";

export const HeroMockup = () => (
  <div className="relative mx-auto w-full  perspective-[2000px] group">
    {/* Glow Effect behind mockup */}
    <div className="absolute inset-0  rounded-full transform scale-75 group-hover:scale-90 transition-transform duration-700"></div>

    {/* The 3D Card */}
    <div className="relative bg-background border border-border rounded-xl shadow-2xl overflow-hidden transform md:rotate-x-12 group-hover:rotate-x-0 transition-transform duration-700 ease-out p-1">
      {/* Fake Browser Header */}
      <div className="h-8 bg-muted/15 rounded-t-lg border-b border-border flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
        <div className="ml-4 h-4 w-64 bg-muted/50 rounded-full"></div>
      </div>

      {/* App UI Representation */}
      <div className="p-6 grid gap-6">
        {/* App Header */}
        <div className="flex justify-between items-end">
          <div>
            <div className="text-xs font-mono text-border mb-2">
              MONDAY, OCT 24
            </div>
            <div className="text-3xl font-bold text-foreground">Hello, Deb</div>
          </div>
          <div className="flex gap-2">
            <div className="bg-card border border-border px-3 py-1 rounded text-xs text-foreground/25">
              Edit Mode
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "TOTAL", val: "4", color: "text-foreground" },
            { label: "ATTEND", val: "92%", color: "text-foreground" },
            { label: "PRESENT", val: "12", color: "text-emerald-400" },
            { label: "ABSENT", val: "1", color: "text-rose-400" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-card/50 border aspect-square md:aspect-auto border-border p-1.5 md:p-4 rounded-lg"
            >
              <div className="text-[10px] uppercase tracking-wider text-foreground/20 font-semibold">
                {stat.label}
              </div>
              <div className={`text-xl font-bold mt-1 ${stat.color}`}>
                {stat.val}
              </div>
            </div>
          ))}
        </div>

        {/* Schedule List */}
        <div className="space-y-3 relative">
          <div className="absolute left-[19px] top-4 bottom-4 w-[1px] bg-card"></div>
          {[
            {
              time: "09:00 AM",
              title: "Data Structures",
              code: "CS201",
              status: "present",
            },
            {
              time: "11:00 AM",
              title: "Linear Algebra",
              code: "MAT104",
              status: "pending",
            },
            {
              time: "02:00 PM",
              title: "Physics Lab",
              code: "PHY101",
              status: "absent",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 relative">
              <div
                className={`w-3 h-3 rounded-full border-2 border-border z-10 mt-6 translate-x-[13.5px] ${
                  item.status === "present"
                    ? "bg-emerald-500"
                    : item.status === "absent"
                    ? "bg-destructive"
                    : "bg-muted"
                }`}
              ></div>
              <div className="flex-1 bg-background border border-border rounded-lg p-4 flex justify-between items-center group/card hover:border-foreground/30 transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono bg-background text-foreground/60 px-1 rounded border border-border">
                      {item.time}
                    </span>
                  </div>
                  <div className="text-foreground font-medium">
                    {item.title}
                  </div>
                  <div className="text-xs text-foreground/50">{item.code}</div>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                    item.status === "present"
                      ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-500"
                      : item.status === "absent"
                      ? "bg-rose-500/10 border-rose-500/50 text-rose-500"
                      : "bg-foreground/40 border-border text-foreground/50"
                  }`}
                >
                  {item.status === "present" && <CheckCircle2 size={14} />}
                  {item.status === "absent" && (
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  )}
                  {item.status === "pending" && (
                    <div className="w-2 h-2 border-2 border-current rounded-full"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
