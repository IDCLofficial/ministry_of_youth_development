import Link from "next/link";

type AppLinkProps = {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  className?: string;
};

export const AppLink: React.FC<AppLinkProps> = ({ label, href, variant, size, className }) => {
    // Only apply the animated border for the 'primary' variant
    const isPrimary = variant === "primary";
    return(
        <div className={isPrimary ? "relative inline-block" : undefined}>
          {isPrimary && (
            <div
              className="pointer-events-none absolute -inset-1 rounded-lg blur-sm opacity-80 z-0"
              style={{
                background: "linear-gradient(270deg, #ff0080, #7928ca, #00ffea, #ff0080)",
                backgroundSize: "600% 600%",
                animation: "rgb-border 3s linear infinite",
              }}
            />
          )}
          {/* Keyframes for the animation (inline style tag) */}
          {isPrimary && (
            <style>{`
              @keyframes rgb-border {
                0% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
              }
            `}</style>
          )}
          <Link
            href={href}
            className={`${className} ${variant} ${size} relative z-10`}
          >
            {label}
          </Link>
        </div>
    )
}
