import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DocumentCard from './DocumentCard'

const documents = [
  {
    documentName: "Kitchen_sink.pdf",
    date: "11/9/19",
    time: "3:24 pm"
  },
  {
    documentName: "Kitchen_sink.pdf",
    date: "11/9/19",
    time: "3:24 pm"
  },
  {
    documentName: "Kitchen_sink.pdf",
    date: "11/9/19",
    time: "3:24 pm"
  },
  {
    documentName: "Kitchen_sink.pdf",
    date: "11/9/19",
    time: "3:24 pm"
  },
   {
    documentName: "Kitchen_sink.pdf",
    date: "11/9/19",
    time: "3:24 pm"
  },
];

const Documents = props => {
    const getDocuments = () => {
      return documents.map((document) => {
      return(
      <DocumentsListContainer>
      <DocumentCard document={document} />
      </DocumentsListContainer>)
        })
  };

  return (
    <>
      <DocumentsContainer>
        <Documentstitle>
          <DocumentsTitleText>Documents</DocumentsTitleText>
        </Documentstitle>
             
          {getDocuments()}
        
      </DocumentsContainer>
    </>
  );
};

export default Documents;

const DocumentsContainer = styled.div`
  
  width: 530px;
  height: 400px;
  
  border: 1px solid #dcd9d5;
  box-sizing: border-box;
  border-radius: 3px;
  background: #ffffff;
`;

const Documentstitle = styled.div`
  width: 530px;
  height: 40px;
  left: 878px;
  top: 136px;

  background: #3f3a36;

  font-size: 16px;
  line-height: 19px;

  color: #fbfaf9;
`;
const DocumentsTitleText = styled.div`
  padding: 12px 16px 12px 16px;

  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;

  color: #fbfaf9;
`;

const DocumentsListContainer = styled.div`
  background: #fafafa;
  
  :nth-child(even) {
    background: #ffffff;
  }
`;