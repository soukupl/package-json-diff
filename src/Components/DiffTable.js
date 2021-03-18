import PropTypes from "prop-types";
import Styles from "../Styles/tables.module.scss";

const DiffTable = ({ data }) => {
  console.table(data);

  return (
    <table className={Styles.table}>
      <thead className={Styles.head}></thead>
      <tbody className={Styles.body}>
        {data &&
          data.map((item) => {
            return (
              <tr key={item.package} className={Styles.item}>
                <th>{item.package}</th>
                <td>{item.ver1}</td>
                <td>{item.ver2}</td>
                <td>{item.ver}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

DiffTable.propTypes = {
  data: PropTypes.array,
};

export default DiffTable;
