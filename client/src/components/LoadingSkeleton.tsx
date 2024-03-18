import "../index.css"
import { SkeletonTypes } from "shared/types";
import DashboardBox from "@/components/DashboardBox";

export default function Loading({ gridArea }:SkeletonTypes) {
  return (
    <DashboardBox gridArea={gridArea}>
      <section className="app-loader">
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </DashboardBox>
  );
}
