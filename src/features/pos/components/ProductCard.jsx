import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProductCard({ producto }) {
  const { nombre, precio, imagen, categoria } = producto;

  return (
    <a href="#"º>
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={imagen}
          alt={nombre}
          className=""
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">{categoria}</Badge>
          </CardAction>
          <CardTitle>{nombre}</CardTitle>
          <CardDescription>
            <span className="text-lg font-bold text-primary">
              $ {precio.toLocaleString("es-AR")}
            </span>
          </CardDescription>
        </CardHeader>
        <CardFooter></CardFooter>
      </Card>
    </a>
  );
}
