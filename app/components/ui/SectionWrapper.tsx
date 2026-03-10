import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`flex py-25 px-20 ${className}`}>
      {children}
    </section>
  );
}
