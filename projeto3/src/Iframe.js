import React from "react";
import { MDBContainer, MDBIframe } from "mdbreact";

const IframePage = () => {
  return (
    <MDBContainer className="text-center">
      <MDBIframe src="https://www.youtube.com/embed/v64KOxKVLVg" />
    </MDBContainer>
  );
}

export default IframePage;