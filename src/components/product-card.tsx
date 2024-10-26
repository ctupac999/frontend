import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProductCar({product}:any) {
    return(
        <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            {product.name}
            <span className="text-sm font-bold text-gray-500">
            ${product.price}
            </span>
          </CardTitle>
        </CardHeader>
        <img src={product.image}></img>
        <CardContent>
          <p>{product.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="mt-5">Buy</Button>
          <Button className="mt-5" variant="destructive">Delete</Button>
        </CardFooter>
      </Card>
    ) 
}
