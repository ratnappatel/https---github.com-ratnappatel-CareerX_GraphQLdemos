import React from 'react';
// Created Context at global level for current project
const mContext=React.createContext({})

export  const mProvider=mContext.Provider;

export default mContext;
