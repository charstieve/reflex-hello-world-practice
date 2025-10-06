import {Fragment,useCallback,useContext,useEffect} from "react"
import {Button as RadixThemesButton,Code as RadixThemesCode,Container as RadixThemesContainer,Flex as RadixThemesFlex,Heading as RadixThemesHeading,IconButton as RadixThemesIconButton,Link as RadixThemesLink,Text as RadixThemesText} from "@radix-ui/themes"
import {ColorModeContext,EventLoopContext} from "$/utils/context"
import {ReflexEvent,isTrue} from "$/utils/state"
import {Moon as LucideMoon,Sun as LucideSun} from "lucide-react"
import {Link as ReactRouterLink} from "react-router"
import {jsx} from "@emotion/react"




function Fragment_4eccfd74653df2c248da64de2d1cc715 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    jsx(Fragment,{},((resolvedColorMode?.valueOf?.() === "light"?.valueOf?.())?(jsx(Fragment,{},jsx(LucideSun,{},))):(jsx(Fragment,{},jsx(LucideMoon,{},)))))
  )
}


function Iconbutton_3bedd826d25a324edade2a6a1f71ed90 () {
  const { toggleColorMode } = useContext(ColorModeContext)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, ReflexEvent, toggleColorMode])

  return (
    jsx(RadixThemesIconButton,{css:({ ["padding"] : "6px", ["position"] : "fixed", ["top"] : "2rem", ["right"] : "2rem", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) }),onClick:on_click_9922dd3e837b9e087c86a2522c2c93f8},jsx(Fragment_4eccfd74653df2c248da64de2d1cc715,{},))
  )
}


function Link_8da8f4cf5443fd962ee29cd4dcfedf3c () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : Object.assign(new String("var(--accent-8)"), ({ ["color"] : "accent", ["alpha"] : false, ["shade"] : 8 })) }) }),size:"3"},jsx(ReactRouterLink,{to:"https://reflex.dev"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["textAlign"] : "center", ["padding"] : "1em" }),direction:"row",gap:"3"},"Built with ",jsx("svg",{"aria-label":"Reflex",css:({ ["fill"] : ((resolvedColorMode?.valueOf?.() === "light"?.valueOf?.()) ? "#110F1F" : "white") }),height:"12",role:"img",width:"56",xmlns:"http://www.w3.org/2000/svg"},jsx("path",{d:"M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z"},),jsx("path",{d:"M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z"},),jsx("path",{d:"M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z"},),jsx("path",{d:"M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z"},),jsx("path",{d:"M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z"},),jsx("path",{d:"M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z"},),jsx("title",{},"Reflex")))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesContainer,{css:({ ["padding"] : "16px" }),size:"3"},jsx(Iconbutton_3bedd826d25a324edade2a6a1f71ed90,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["minHeight"] : "85vh" }),direction:"column",justify:"center",gap:"5"},jsx(RadixThemesHeading,{size:"9"},"Welcome to Reflex!"),jsx(RadixThemesText,{as:"p",size:"5"},"Get started by editing ",jsx(RadixThemesCode,{},"reflex_hello_world_practice/reflex_hello_world_practice.py")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : Object.assign(new String("var(--accent-8)"), ({ ["color"] : "accent", ["alpha"] : false, ["shade"] : 8 })) }) })},jsx(ReactRouterLink,{target:(true ? "_blank" : ""),to:"https://reflex.dev/docs/getting-started/introduction/"},jsx(RadixThemesButton,{},"Check out our docs!")))),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })},jsx(Link_8da8f4cf5443fd962ee29cd4dcfedf3c,{},))),jsx("title",{},"ReflexHelloWorldPractice | Index"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}