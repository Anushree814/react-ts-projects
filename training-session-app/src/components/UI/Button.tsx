import { ComponentPropsWithoutRef, ReactNode } from "react"
import { Link, LinkProps } from "react-router-dom";
type BaseProps = {
    children:ReactNode;
    textOnly?: boolean;
}
type ButtonProps = BaseProps & ComponentPropsWithoutRef<'button'>
type BtnAsLinkProps = LinkProps & BaseProps & ComponentPropsWithoutRef<'link'> & {
    to: string;
}
function isPropsALink(props:ButtonProps | BtnAsLinkProps): props is BtnAsLinkProps{
    return 'to' in props;
}
export default function Button(props: BtnAsLinkProps | ButtonProps){
    // if('to' in props){ //This will give a runtime error thus we create a function to check it
    //     return <link t/>
    // }
    if(isPropsALink(props)){
        const {children, to, textOnly, ...otherProps} = props
        return (
          <Link
            to={to}
            className={`button ${textOnly ? "button--text-only" : ""}`}
            {...otherProps}
          >
            {children}
          </Link>
        );
    }
    const { children, textOnly, ...otherProps } = props; //here if we add 'to' prop then will get error as TS knows here its a btn props
    return(
        <button className={`button ${textOnly ? 'button--text-only':''}`} {...otherProps}>{children}</button>
    )
}
