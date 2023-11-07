import React, { useCallback, useEffect, useState } from "react";
import SideBar from "../SideBar";
import Content from "../Content";
import { Outlet, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [tabActive, setTabActive] = useState("");

  useEffect(() => {
    handleNavigate(tabActive);
  }, [tabActive]);

  const handleNavigate = useCallback(
    (url) => {
      navigate(url, { replace: true });
    },
    [navigate]
  );
  return (
    <div>
      <div>
        <SideBar tabActive={tabActive} onClickTab={setTabActive} />
        <Content>
          <Outlet />
        </Content>
      </div>
    </div>
  );
}

export default Home;
