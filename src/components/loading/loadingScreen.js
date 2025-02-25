import React from "react";
import { Spin } from "antd";
import styles from "./loading.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.loadingContainer}>
      <Spin size="large" />
    </div>
  );
};

export default LoadingScreen;
