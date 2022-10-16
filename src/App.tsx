import "./App.scss";
import React, { useRef } from "react";
import { CompaniesList } from "data";
import { BlogList, CompanyFilter, FooterLinks, Header } from "components";
import { initResizeEventListener } from "hooks";
import { useRecoilValue } from "recoil";
import { filteredExperiencesState } from "recoil/selectors";

export const App = (): React.ReactElement => {
  const asideRef = useRef<HTMLElement>();
  const filteredExperiences = useRecoilValue(filteredExperiencesState);

  initResizeEventListener()(asideRef);

  return (
    <div className="container">
      <header>
        <Header />
      </header>

      <main>
        <BlogList filteredExperiences={filteredExperiences} />
      </main>

      <aside ref={asideRef}>
        <CompanyFilter companies={CompaniesList} />
      </aside>

      <footer>
        <FooterLinks />
      </footer>
    </div>
  );
};
