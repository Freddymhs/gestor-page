// @ts-nocheck
export const Card = ({ children, className, ...props }) => (
  <div className={`rounded-lg shadow-md ${className}`} {...props}>
    {children}
  </div>
);
export const CardContent = ({ children, className, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);