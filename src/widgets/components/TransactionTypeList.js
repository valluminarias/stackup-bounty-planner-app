export default function TransactionTypeList({ title, list, formatCurrency, onDeleteTransaction, style }) {
  return (
    <div style={style}>
      <h2>{title}</h2>
      <ul
        style={{
          marginTop: "15px",
          paddingLeft: "20px",
          paddingRight: "10px",
          listStyleType: "none",
          maxHeight: "300px",
          overflowY: "auto",
        }}
      >
        {list?.length > 0 &&
          list.map((item) => (
            <li
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  width: "50%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  wordWrap: "pre-wrap",
                }}
              >
                {item.title}{" "}
              </span>
              <strong
                style={{
                  marginRight: "18px",
                  width: "100%",
                  textAlign: "right",
                }}
              >
                {formatCurrency(item.amount)}
              </strong>

              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
                onClick={() => onDeleteTransaction(item)}
              >
                X
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
