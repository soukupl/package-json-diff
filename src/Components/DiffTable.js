import PropTypes from "prop-types";
import Styles from "../Styles/tables.module.scss";
import VersionDiffIcon from "./VersionDiffIcon";

const DiffTable = ({ title, data }) => {
  console.table(data);

  return (
    <div>
      {title && <div className={Styles.tableTitle}>{title}</div>}
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
                  <td className={Styles.diffIcon}>
                    <VersionDiffIcon ver1={item.ver1} ver2={item.ver2} />
                  </td>
                  <td>{item.ver}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

DiffTable.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default DiffTable;
