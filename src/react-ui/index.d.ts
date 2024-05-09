import * as react from 'react';
import { Dispatch, SetStateAction, RefObject } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as BaseDialog from '@radix-ui/react-dialog';
import * as BaseCheckbox from '@radix-ui/react-checkbox';
import * as BaseSelect from '@radix-ui/react-select';
import * as BaseRadioGroup from '@radix-ui/react-radio-group';
import * as baseToast from '@radix-ui/react-toast';
import * as BaseCollapsible from '@radix-ui/react-collapsible';
import * as BaseTabs from '@radix-ui/react-tabs';
import { ClassValue } from 'clsx';
export { ClassValue } from 'clsx';
import * as tailwindcss_types_config from 'tailwindcss/types/config';

type Color$3 = "red" | "slate" | "black" | "blue" | "orange";
type Size$3 = "xs" | "sm" | "md" | "lg" | "xl";
type Variant$2 = "fill" | "outline" | "ghost";
type Radius = "default" | "full";
declare const Button: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    asChild?: boolean;
} & react.RefAttributes<HTMLButtonElement>, "ref"> & {
    color?: Color$3 | "red";
    size?: Size$3 | "sm";
    variant?: Variant$2 | "fill";
    radius?: Radius | "default";
} & react.RefAttributes<HTMLButtonElement>>;

declare const IconButton: react.ForwardRefExoticComponent<Omit<Omit<Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    asChild?: boolean;
} & react.RefAttributes<HTMLButtonElement>, "ref"> & {
    color?: "red" | "slate" | "black" | "blue" | "orange";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    variant?: "fill" | "outline" | "ghost";
    radius?: "default" | "full";
} & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;

type Variant$1 = 'border' | 'primaryShadow' | 'deepShadow' | 'ghost';
type Direction$2 = 'row' | 'col';
declare const CardRoot: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    asChild?: boolean;
} & react.RefAttributes<HTMLDivElement>, "ref"> & {
    variant?: Variant$1 | 'border';
    direction?: Direction$2 | 'row';
} & react.RefAttributes<HTMLDivElement>>;
declare const CardHeader: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    asChild?: boolean;
} & react.RefAttributes<HTMLDivElement>, "ref"> & {
    isDecorate?: boolean;
} & react.RefAttributes<HTMLDivElement>>;
declare const CardBody: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    asChild?: boolean;
} & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const CardFooter: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    asChild?: boolean;
} & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const Card: {
    Root: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        asChild?: boolean;
    } & react.RefAttributes<HTMLDivElement>, "ref"> & {
        variant?: Variant$1 | 'border';
        direction?: Direction$2 | 'row';
    } & react.RefAttributes<HTMLDivElement>>;
    Header: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        asChild?: boolean;
    } & react.RefAttributes<HTMLDivElement>, "ref"> & {
        isDecorate?: boolean;
    } & react.RefAttributes<HTMLDivElement>>;
    Body: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        asChild?: boolean;
    } & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Footer: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        asChild?: boolean;
    } & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
};

interface CalcPaginationItemProps {
    index: number;
    currentPage: number;
    totalPage: number;
    handlePageChange: (page: number) => void;
    className?: string;
}
declare function CalcPaginationItem({ index, currentPage, totalPage, handlePageChange, className, }: CalcPaginationItemProps): react_jsx_runtime.JSX.Element;

type DialogRootProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Root>;
declare function DialogRoot(props: DialogRootProps): react_jsx_runtime.JSX.Element;
type DialogPortalProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Portal>;
declare function DialogPortal(props: DialogPortalProps): react_jsx_runtime.JSX.Element;
type Color$2 = "transparent" | "black" | "slate";
declare const Dialog: {
    Root: typeof DialogRoot;
    Trigger: react.ForwardRefExoticComponent<Omit<BaseDialog.DialogTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    Portal: typeof DialogPortal;
    Overlay: react.ForwardRefExoticComponent<Omit<BaseDialog.DialogOverlayProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
        color?: Color$2 | "black";
    } & react.RefAttributes<HTMLDivElement>>;
    Content: react.ForwardRefExoticComponent<Omit<BaseDialog.DialogContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
        radius?: boolean;
    } & react.RefAttributes<HTMLDivElement>>;
    Close: react.ForwardRefExoticComponent<Omit<BaseDialog.DialogCloseProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    Title: react.ForwardRefExoticComponent<Omit<BaseDialog.DialogTitleProps & react.RefAttributes<HTMLHeadingElement>, "ref"> & react.RefAttributes<HTMLHeadingElement>>;
    Description: react.ForwardRefExoticComponent<Omit<BaseDialog.DialogDescriptionProps & react.RefAttributes<HTMLParagraphElement>, "ref"> & react.RefAttributes<HTMLParagraphElement>>;
};

declare const Checkbox: {
    Root: react.ForwardRefExoticComponent<Omit<BaseCheckbox.CheckboxProps & react.RefAttributes<HTMLButtonElement>, "ref"> & {
        color: "default" | "red";
    } & react.RefAttributes<HTMLButtonElement>>;
    Indicator: react.ForwardRefExoticComponent<Omit<BaseCheckbox.CheckboxIndicatorProps & react.RefAttributes<HTMLSpanElement>, "ref"> & react.RefAttributes<HTMLSpanElement>>;
    TickIcon: react.ForwardRefExoticComponent<Omit<react.SVGProps<SVGSVGElement>, "ref"> & {
        color?: string;
    } & react.RefAttributes<SVGSVGElement>>;
};

declare const Select: {
    Root: react.FC<BaseSelect.SelectProps>;
    Group: react.ForwardRefExoticComponent<BaseSelect.SelectGroupProps & react.RefAttributes<HTMLDivElement>>;
    Value: react.ForwardRefExoticComponent<BaseSelect.SelectValueProps & react.RefAttributes<HTMLSpanElement>>;
    Trigger: react.ForwardRefExoticComponent<Omit<BaseSelect.SelectTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & {
        hasBorder?: boolean;
        color?: "red" | "white";
    } & react.RefAttributes<HTMLButtonElement>>;
    Content: react.ForwardRefExoticComponent<Omit<BaseSelect.SelectContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
        position?: string;
    } & react.RefAttributes<HTMLDivElement>>;
    Label: react.ForwardRefExoticComponent<Omit<BaseSelect.SelectLabelProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
        icon?: React.ReactNode;
    } & react.RefAttributes<HTMLDivElement>>;
    Item: react.ForwardRefExoticComponent<Omit<BaseSelect.SelectItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
        icon?: React.ReactNode;
    } & react.RefAttributes<HTMLDivElement>>;
    Separator: react.ForwardRefExoticComponent<Omit<BaseSelect.SelectSeparatorProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
        icon?: React.ReactNode;
    } & react.RefAttributes<HTMLDivElement>>;
};

declare const RadioDotIcon: react.ForwardRefExoticComponent<Omit<react.SVGProps<SVGSVGElement>, "ref"> & {
    color?: string;
} & react.RefAttributes<SVGSVGElement>>;
declare const RadioGroupRoot: react.ForwardRefExoticComponent<Omit<BaseRadioGroup.RadioGroupProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: react.ForwardRefExoticComponent<Omit<BaseRadioGroup.RadioGroupItemProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
declare const RadioGroup: {
    Root: react.ForwardRefExoticComponent<Omit<BaseRadioGroup.RadioGroupProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Item: react.ForwardRefExoticComponent<Omit<BaseRadioGroup.RadioGroupItemProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    Dot: react.ForwardRefExoticComponent<Omit<react.SVGProps<SVGSVGElement>, "ref"> & {
        color?: string;
    } & react.RefAttributes<SVGSVGElement>>;
};

declare const Input: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    className?: string;
    type?: string;
} & react.RefAttributes<HTMLInputElement>, "ref"> & {
    color: "gray" | "white";
    variant: "solid" | "none" | "alert";
} & react.RefAttributes<HTMLInputElement>>;

type Size$2 = "sm" | "md" | "lg";
declare const CircleLoader: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    size?: Size$2 | "md";
} & react.RefAttributes<HTMLDivElement>>;

type Size$1 = "sm" | "md" | "lg";
declare const LineLoader: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    size?: Size$1 | "md";
} & react.RefAttributes<HTMLDivElement>>;

type Size = "sm" | "md" | "lg";
type Color$1 = "red" | "black" | "blue" | "orange" | "stone" | "neutral" | "white" | "slate";
declare const RingLoader: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    size?: Size | "md";
    color?: Color$1 | "red";
} & react.RefAttributes<HTMLDivElement>>;

declare const ClockLoader: react.ForwardRefExoticComponent<react.SVGAttributes<SVGElement> & {
    children?: never;
    color?: string;
} & react.RefAttributes<SVGSVGElement>>;

declare const Skeleton: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    className?: string;
} & react.RefAttributes<HTMLDivElement>>;

type Position = "topLeft" | "topCenter" | "topRight" | "center" | "bottomLeft" | "bottomCenter" | "bottomRight";
declare const Toast: {
    Provider: react.FC<baseToast.ToastProviderProps>;
    Viewport: react.ForwardRefExoticComponent<Omit<baseToast.ToastViewportProps & react.RefAttributes<HTMLOListElement>, "ref"> & {
        position?: Position;
    } & react.RefAttributes<HTMLOListElement>>;
    Root: react.ForwardRefExoticComponent<Omit<baseToast.ToastProps & react.RefAttributes<HTMLLIElement>, "ref"> & react.RefAttributes<HTMLLIElement>>;
    Title: react.ForwardRefExoticComponent<Omit<baseToast.ToastTitleProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Description: react.ForwardRefExoticComponent<Omit<baseToast.ToastDescriptionProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Action: react.ForwardRefExoticComponent<Omit<baseToast.ToastActionProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    Close: react.ForwardRefExoticComponent<Omit<baseToast.ToastCloseProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
};

declare const Rate: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    initialRating?: number;
    onRatingChange?: (rating: number) => void;
    maxRating?: number;
    hideEmpty?: boolean;
    starSVGStyle?: {
        active?: string;
        empty?: string;
    };
    customActiveEl?: React.ReactNode;
    customEmptyEl?: React.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

declare const Collapsible: {
    Root: react.ForwardRefExoticComponent<Omit<BaseCollapsible.CollapsibleProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Overlay: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        variant?: "default" | "vague" | "";
    } & react.RefAttributes<HTMLDivElement>>;
    Trigger: react.ForwardRefExoticComponent<Omit<BaseCollapsible.CollapsibleTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & {
        color?: "gray" | "blue";
        size?: "default" | "lg";
    } & react.RefAttributes<HTMLButtonElement>>;
    Content: react.ForwardRefExoticComponent<Omit<BaseCollapsible.CollapsibleContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
};

type Variant = "searchBar" | "searchBarBtn" | "searchBarBtnLg" | "contentBtnGroup" | "searchBarUnderline" | "contentUnderline" | "contentUnderlineAndDraw" | "searchBarUnderlineLg";
declare const Tabs: {
    Root: react.ForwardRefExoticComponent<Omit<BaseTabs.TabsProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
        variant?: Variant;
    } & react.RefAttributes<HTMLDivElement>>;
    List: react.ForwardRefExoticComponent<Omit<BaseTabs.TabsListProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Trigger: react.ForwardRefExoticComponent<Omit<BaseTabs.TabsTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    Content: react.ForwardRefExoticComponent<Omit<BaseTabs.TabsContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
};

declare const Pagination: {
    Root: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        asChild?: boolean;
    } & react.RefAttributes<HTMLDivElement>, "ref"> & {
        asChild?: boolean;
    } & react.RefAttributes<HTMLDivElement>>;
    Content: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        asChild?: boolean;
    } & react.RefAttributes<HTMLDivElement>, "ref"> & {
        asChild?: boolean;
    } & react.RefAttributes<HTMLDivElement>>;
    Item: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
        asChild?: boolean;
    } & react.RefAttributes<HTMLButtonElement>, "ref"> & {
        asChild?: boolean;
    } & react.RefAttributes<HTMLButtonElement>>;
    Previous: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        asChild?: boolean;
        href?: string;
    } & react.RefAttributes<HTMLDivElement>, "ref"> & {
        asChild?: boolean;
        href?: string;
    } & react.RefAttributes<HTMLDivElement>>;
    Next: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        asChild?: boolean;
        href?: string;
    } & react.RefAttributes<HTMLDivElement>, "ref"> & {
        asChild?: boolean;
        href?: string;
    } & react.RefAttributes<HTMLDivElement>>;
};

type DrawerRootProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Root>;
declare function DrawerRoot(props: DrawerRootProps): react_jsx_runtime.JSX.Element;
type DrawerPortalProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Portal>;
declare function DrawerPortal(props: DrawerPortalProps): react_jsx_runtime.JSX.Element;
type Color = "transparent" | "black" | "slate";
declare const Drawer: {
    Root: typeof DrawerRoot;
    Trigger: react.ForwardRefExoticComponent<Omit<BaseDialog.DialogTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    Portal: typeof DrawerPortal;
    Overlay: react.ForwardRefExoticComponent<Omit<BaseDialog.DialogOverlayProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
        color?: Color | "black";
    } & react.RefAttributes<HTMLDivElement>>;
    Content: react.ForwardRefExoticComponent<Omit<BaseDialog.DialogContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
        open?: boolean;
        slideDirection?: "left" | "right" | "top" | "bottom";
        slideWidth?: "full" | "half" | "three4th";
        duration?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "1000";
    } & react.RefAttributes<HTMLDivElement>>;
    Close: react.ForwardRefExoticComponent<Omit<BaseDialog.DialogCloseProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    Title: react.ForwardRefExoticComponent<Omit<BaseDialog.DialogTitleProps & react.RefAttributes<HTMLHeadingElement>, "ref"> & react.RefAttributes<HTMLHeadingElement>>;
    Description: react.ForwardRefExoticComponent<Omit<BaseDialog.DialogDescriptionProps & react.RefAttributes<HTMLParagraphElement>, "ref"> & react.RefAttributes<HTMLParagraphElement>>;
};

declare const ScrollSpy: {
    Root: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        scrollToHidden?: boolean;
    } & react.RefAttributes<HTMLDivElement>>;
    Group: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & react.RefAttributes<HTMLUListElement>>;
    Content: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & {
        targetId?: string;
    } & react.RefAttributes<HTMLLIElement>>;
    Item: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
        asChild?: boolean;
        customActiveStyle?: string;
    } & react.RefAttributes<HTMLSpanElement>>;
};

type Direction$1 = null | "prev" | "next";
type ApiObj = {
    count: number;
    current: number;
    dotCount: number;
};
type CarouselNavObj = {
    variant?: "picture" | "dot";
};
declare const Carousel: {
    Root: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        loop?: boolean;
        startPosition?: number;
        setApi?: null | React.Dispatch<React.SetStateAction<null | ApiObj>>;
        autoPlayDirection?: Direction$1;
        autoPlaySpeed?: number;
    } & react.RefAttributes<HTMLDivElement>>;
    Group: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        asChild?: boolean;
    } & react.RefAttributes<HTMLDivElement>>;
    Overlay: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        asChild?: boolean;
    } & react.RefAttributes<HTMLDivElement>>;
    Trigger: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        asChild?: boolean;
        direction?: Direction$1;
    } & react.RefAttributes<HTMLDivElement>>;
    Content: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & {
        children: React.ReactNode[];
        asChild?: boolean;
    } & react.RefAttributes<HTMLUListElement>>;
    Item: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & {
        asChild?: boolean;
    } & react.RefAttributes<HTMLLIElement>>;
    Nav: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & CarouselNavObj & react.RefAttributes<HTMLUListElement>>;
    NavItem: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & {
        index: number;
        customActiveStyle?: string;
    } & react.RefAttributes<HTMLLIElement>>;
};

declare const Slider: {
    Root: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        min: number;
        max: number;
        minValue: number;
        maxValue: number;
        setMinValue: Dispatch<SetStateAction<number>>;
        setMaxValue: Dispatch<SetStateAction<number>>;
    } & react.RefAttributes<HTMLDivElement>>;
    Input: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
        min: number;
        max: number;
        step: number;
        tag: "less" | "more";
    } & react.RefAttributes<HTMLInputElement>>;
    Control: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        tag: "less" | "more";
    } & react.RefAttributes<HTMLDivElement>>;
    Rail: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    InnerRail: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
};

declare const mergeObjects: (obj: object) => {};

declare const cn: (...inputs: ClassValue[]) => string;

declare const lionPlugin: {
    handler: tailwindcss_types_config.PluginCreator;
    config?: Partial<tailwindcss_types_config.Config>;
};

type Direction = "prev" | "next";
declare const useClickScroll: (ref: RefObject<HTMLElement>) => {
    handleClickScroll: (direction: Direction) => void;
};

declare const useDragScroll: (ref: RefObject<HTMLElement>, options?: {
    direction?: "vertical" | "horizontal" | "both";
}) => {
    handleMouseDown: (event: {
        clientX: number;
        clientY: number;
    }) => void;
};

export { type ApiObj, Button, CalcPaginationItem, Card, CardBody, CardFooter, CardHeader, CardRoot, Carousel, Checkbox, CircleLoader, ClockLoader, Collapsible, Dialog, Drawer, IconButton, Input, LineLoader, Pagination, RadioDotIcon, RadioGroup, RadioGroupItem, RadioGroupRoot, Rate, RingLoader, ScrollSpy, Select, Skeleton, Slider, Tabs, Toast, cn, lionPlugin, mergeObjects, useClickScroll, useDragScroll };
