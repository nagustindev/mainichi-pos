import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  ChartBarIcon,
  CalendarDotsIcon,
  GearSixIcon,
  PackageIcon,
  BasketIcon,
  SoccerBallIcon,
  CashRegisterIcon,
} from "@phosphor-icons/react";

const navigationItems = [
  {
    label: "Ventas",
    href: "#ventas",
    icon: CashRegisterIcon,
    active: true,
  },
  {
    label: "Compras",
    href: "#compras",
    icon: BasketIcon,
  },
  {
    label: "Productos",
    href: "#productos",
    icon: PackageIcon,
  },
  {
    label: "Reportes",
    href: "#reportes",
    icon: ChartBarIcon,
  },
];

const activeTurnLabel = "TURNO ACTIVO";
const activeDateLabel = "Viernes, 21 de Agosto";

export function TopAppBar() {
  return (
    <header className="flex h-16 w-full shrink-0 select-none items-center border-b border-border/70 bg-card/95 px-4 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-xl md:px-6">
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-sm font-black tracking-tight text-white shadow-sm shadow-emerald-500/30 ring-4 ring-emerald-500/10">
            <SoccerBallIcon className="size-5" />
          </span>
          <div className="leading-tight">
            <h1 className="font-heading text-xl font-semibold tracking-tight text-foreground">
              mainichi
            </h1>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-600">
              canchas de fútbol 5
            </p>
          </div>
        </div>

        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-1 rounded-full border border-border/70 bg-muted/60 p-1.5 shadow-sm shadow-slate-950/5">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={item.active ? "page" : undefined}
                    className={cn(
                      "group inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30 focus-visible:ring-offset-0",
                      item.active
                        ? "bg-card text-foreground shadow-sm ring-1 ring-border"
                        : "text-muted-foreground hover:bg-card hover:text-foreground hover:shadow-sm"
                    )}
                  >
                    <Icon
                      className={cn(
                        "size-4 transition-transform duration-150",
                        item.active
                          ? "text-emerald-600"
                          : "text-muted-foreground group-hover:-translate-y-0.5 group-hover:text-emerald-600"
                      )}
                    />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <div className="hidden items-center gap-3 border-r border-border/70 pr-4 text-right xl:flex">
          <CalendarDotsIcon className="size-4 text-muted-foreground" />
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-emerald-600">
              {activeTurnLabel}
            </p>
            <p className="text-sm font-semibold text-foreground">
              {activeDateLabel}
            </p>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Ajustes"
        >
          <GearSixIcon className="size-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full p-0 hover:bg-transparent"
              aria-label="Abrir menú de usuario"
            >
              <Avatar className="size-10">
                <AvatarImage
                  src="https://github.com/nagustindev.png"
                  alt="nagustindev"
                />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36">
            <DropdownMenuGroup>
              <DropdownMenuItem>Ajustes</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                Cerrar Sesión
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
