import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Buttons() {
  return (
   <div>
    <p className="mx-5 text-xl">Button is use</p>
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button size="default">default </Button>
      <Button size="default" variant='primary'>primary </Button>
      <Button size="default" variant='primaryOutline'>primary outline </Button>
      <Button size="default" variant='secondary'>secondary </Button>
      <Button size="default" variant='secondaryOutline'>secondaryOutline </Button>
      <Button size="default" variant='danger'>danger </Button>
      <Button size="default" variant='dangerOutline'>dangerOutline</Button>
      <Button size="default" variant='super'>super </Button>
      <Button size="default" variant='superOutline'>Super Outline </Button>
      <Button size="default" variant='sidebar'>Sidebar </Button>
      <Button size="default" variant='sidebarOutline'>Sidebar Outline </Button>
      <Button size="default" variant='ghost'>ghost </Button>
    </div>
    
   </div>
  );
}