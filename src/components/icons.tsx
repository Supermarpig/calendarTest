import { forwardRef } from 'react';
import { cn } from '../libs/cn';

interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
}

export const ChevronDownBoldIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99789 8.79678L4.42228 5.22L3.22 6.42189L7.39675 10.6C7.72872 10.9321 8.26706 10.9321 8.59903 10.6L12.7758 6.42189L11.5735 5.22L7.99789 8.79678Z"
        fill={color}
      />
    </svg>
  )
);

type CalendarChevronProps = React.ComponentPropsWithoutRef<'svg'> & {
  size?: number;
};
export const CalendarChevron = forwardRef<SVGSVGElement, CalendarChevronProps>(
  ({ color, className, size = 18, ...props }, ref) => {
    const defaultStyle = 'cursor-pointer inline';
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className={cn(defaultStyle, className)}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.20322 7.99789L10.78 4.42228L9.57811 3.22L5.4 7.39675C5.06792 7.72872 5.06792 8.26706 5.4 8.59903L9.57811 12.7758L10.78 11.5735L7.20322 7.99789Z"
          fill={color}
        />
      </svg>
    );
  }
);

export const ChevronLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M10.42 11.58L9.57162 12.4287L5.57031 8.42867C5.33591 8.19434 5.33591 7.81433 5.57031 7.58L9.57162 3.58L10.42 4.42867L6.84317 8.00434L10.42 11.58Z"
        fill={color}
      />
    </svg>
  )
);
