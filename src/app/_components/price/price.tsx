import { Badge } from "../badge";
import { IconToman } from "../icons/icons";
import { Size } from "../types/size.type";
import { PriceProps } from "./price.types";

const sizeClasse: Record<Size, { textSize: string; svgSize: number }> = {
    tiny: { textSize: 'text-md', svgSize: 16 },
    small: { textSize: 'text-xl', svgSize: 18 },
    normal: { textSize: 'text-2xl', svgSize: 20 },
    large: { textSize: 'text-3xl', svgSize: 22 },
}

export const Price: React.FC<PriceProps> = ({
    size = "normal",
    text = "رایگان",
    price,
    className,
}) => {
    const svgSize = sizeClasse[size].svgSize
    return (
        <>
            {
                price != null && price > 0 ? (
                    <span className={`flex items-center gap-1 font-bold dark:text-white/90  ${sizeClasse[size].textSize} ${className}`}>
                        {price.toLocaleString()}
                        <IconToman strokeWidth={1} viewBox="0 0 16 16" width={svgSize} height={svgSize} />

                    </span>
                ) : (
                    <Badge variant="success" size="small">
                        {text}
                    </Badge>
                )
            }
        </>
    )
}