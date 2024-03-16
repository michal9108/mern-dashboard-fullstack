import "../../index.css";

import DashboardBox from "@/components/DashboardBox";

export default function Loading({ gridArea }) {
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
