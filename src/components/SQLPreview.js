// src/components/SQLPreview.js
import React from 'react';

const SQLPreview = ({ fields, functions, conditions, groupBy, orderBy,subqueries,joins,cases  }) => {
    const generateSQL = () => {
        let selectClause = fields.map(field => {
          const caseClause = cases.length ? `, ${cases.join(', ')}` : '';
          return functions.length ? functions.join('(' + field + ') ') + caseClause : field + caseClause;
        }).join(', ');
        let whereClause = conditions.map(cond => `${cond.field} ${cond.operator} ${cond.value}`).join(' AND ');
        let groupByClause = groupBy.join(', ');
        let orderByClause = orderBy.join(', ');
    
        // Combine subqueries
        let subqueryPart = subqueries.length ? `(${subqueries.join(' UNION ')})` : 'test_bed.momo_transaction_logs';
    
        // Combine joins
        let joinClauses = joins.map(join => `${join.joinType} ${join.table} ON ${join.onCondition}`).join(' ');
    
        return `
          SELECT ${selectClause}
          FROM ${subqueryPart}
          ${joinClauses}
          ${conditions.length ? 'WHERE ' + whereClause : ''}
          ${groupBy.length ? 'GROUP BY ' + groupByClause : ''}
          ${orderBy.length ? 'ORDER BY ' + orderByClause : ''};
        `;
      };

      
  return (
    <div>
      <h3>SQL Preview</h3>
      <pre>{generateSQL()}</pre>
    </div>
  );
};

export default SQLPreview;
