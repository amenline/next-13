import { CSSProperties } from 'react';
import {
  CircleIconButton,
  DeleteIcon,
  EditIcon,
  SecondaryBtn,
} from '../../components';
import { InactiveVisits } from '../../types';

interface Props {
  inactiveVisits: InactiveVisits[];
}

const InactiveVisitsTable = ({ inactiveVisits }: Props) => {
  const style: CSSProperties = {
    borderCollapse: 'separate',
    borderSpacing: '0 8px',
  };

  return (
    <table className='table-auto w-full text-app_text1' style={style}>
      <thead className='text-left'>
        <tr>
          <th className='p-2'>Visitor</th>
          <th className='p-2'>Patient</th>
          <th className='p-2'>Duration of Visit</th>
          <th className='p-2'></th>
        </tr>
      </thead>
      <tbody>
        {inactiveVisits.map(
          ({
            id,
            visitor,
            patient,
            relation,
            visit_start_time,
            visit_end_time,
          }) => {
            return (
              <tr className='bg-white gap-3' key={id}>
                <td className='p-2'>{visitor}</td>
                <td className='p-2'>
                  <div>{patient}</div>
                  <div className='text-sm opacity-50'>
                    <span>Relation: </span>
                    <span className='font-semibold'> {relation}</span>
                  </div>
                </td>
                <td className='p-2'>
                  {visit_start_time} to {visit_end_time}
                </td>
                <td className='flex items-center gap-2 p-2'>
                  <span>
                    <CircleIconButton
                      icon={<EditIcon />}
                      classes='hover:bg-app_bg1'
                    />
                  </span>
                  <span>
                    <CircleIconButton
                      icon={<DeleteIcon />}
                      classes='hover:bg-app_bg1'
                    />
                  </span>
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default InactiveVisitsTable;
