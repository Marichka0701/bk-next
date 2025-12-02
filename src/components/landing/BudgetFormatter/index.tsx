import { Headline } from "@/src/components/shared/ui/typography/Headline";

interface Props {
  value: number;
  currency?: string;
}

export function BudgetFormatter({ value, currency = "DKK" }: Props) {
  const formattedValue = value.toLocaleString("da-DK");

  return (
    <Headline
      as="p"
      variant="h4"
      className="text-secondary-foreground!"
    >
      {currency} {formattedValue}
    </Headline>
  );
}
