import { Typography } from "@/components/typography";
import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { AnchorHTMLAttributes, ReactElement, ReactNode } from "react";

const Link = ({children, ...rest}: AnchorHTMLAttributes<HTMLAnchorElement>&{children: ReactNode}): ReactElement => (
  <NavigationMenuItem>
    <Link {...rest}>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {children}
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
)

export default function Home() {
  return (
    <section style={{maxWidth: 600}}>
      <header>
        <nav className="px-14 py-10 h-24-600 flex items-center justify-between">
          <Typography component="h4">Portifólio</Typography>
          <div>
            {/* <Link>
              Home
            </Link> */}
          </div>
        </nav>
      </header>
      <main>
      
      </main>
    </section>
  );
}
