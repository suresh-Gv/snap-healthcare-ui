export const TableHeader=(props)=>{
    return (
        <>
         <thead>
              <tr>
                <th style={{ width: "20%" }}>
                  <input type="checkbox" name="" />
                </th>
                {props.tableHeaders.map((item, itemIndex) => (
                  <th key={itemIndex}>
                    <a href="#" class="datatable-sorter">
                      {item}
                    </a>
                  </th>
                ))}
              </tr>
            </thead>
        </>
    );
}