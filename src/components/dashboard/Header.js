import React from "react";
import styled from "styled-components";

const Ptag = styled.p`
  text-align: left;
  /* display: inline-block; */
  font-size: 40px;
  color: #212121;
  margin-bottom: 0px;
  margin-top: 2px;
`;
const Icontag = styled.div`
  margin-top: 15px;
  color: #ba68c8;
  display: inline-block;
`;

function HeaderMe(props) {
  return (
    <div className="col s12">
      <div className="col s12 m6">
        <div className="col s12">
          <Ptag>กระแสเงินสด</Ptag>
        </div>
        <div className="col s12 pull-s1">
          <span>ข้อมูลกระแสเงินสด ณ วันที่: 21 พฤษภาคม 2563</span>
        </div>
      </div>
      <div className="col s12 m6">
        <Icontag className="col s12 push-s4">
          <i className="medium material-icons">trending_up</i>
          <i className="medium material-icons">subject</i>
          <i className="medium material-icons">save</i>
        </Icontag>
      </div>
    </div>
  );
}

export default HeaderMe;
