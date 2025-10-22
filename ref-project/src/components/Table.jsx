import React from 'react';

const Table = (props) => {
    return (
        <div className="table">
            <div className="rowdata">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis hic ipsum iusto minus ratione, ullam. Ad cumque dolorum illo labore non, sequi? Assumenda doloribus eius eum ipsa magni placeat quisquam recusandae repudiandae totam.</p>
            {props.children}
            </div>
        </div>
    );
};

export default Table;