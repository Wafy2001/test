import SidebarUser from "@/components/user/SidebarUser";
import { getAllInstance } from "@/services/instance";
import { getCurrentUser } from "@/services/user";
import { ChildrenType } from "@/types";
import { notFound } from "next/navigation";
import React from "react";

const LayoutData = async ({ children }: ChildrenType) => {
  const title = "Admin";

  const user = await getCurrentUser();

  if (user?.role === "USER") return notFound();
  return (
    <>
      <div>
        <SidebarUser title={title} />
        {children}
      </div>
    </>
  );
};

export default LayoutData;
