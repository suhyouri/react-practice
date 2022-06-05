import React from "react";

const styles = {
  card: {
    display: "flex",
    flexFlow: "column nowrap",
    width: 200,
    height: 200,
    border: "10px solid seashell",
    borderRadius: 20,
    padding: 10,
    backgroundColor: "salmon",
    margin: 10,
    fontSize: 13,
  },
    cardImg: {
    overflow: "hidden",
    width: "100%",
    objectFit: "contain",
    marginBottom: 10,
  },
  span: {
    textAlign: "center",
    wordBreak: "break-all",
  },
}

export default function Comment(props) {
  return (
      <div style={styles.card}>
            <img style={styles.cardImg}
              src={props.url}
              alt={props.name}
            />
            <span style={styles.span}>{props.comment}</span>
          </div>
  )
}
