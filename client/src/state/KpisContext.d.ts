// KpisContext.d.ts

declare module "../../state/KpisContext" {
  import { GetKpisResponse } from "./types";

  export interface KpisContext {
    kpis: GetKpisResponse[] | null;
    error: string | null;
  }

  const KpisContext: React.Context<KpisContext>;

  export default KpisContext;
}
