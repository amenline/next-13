import {
  CircleIconButton,
  DeletedRecordIcon,
  DropDownList,
  EllipsisIcon,
  FilterIcon,
} from '../../components';
import { InactiveVisits, User, Visits } from '../../types';
import ActiveVisitsTable from './activeVisitsTable';
import InactiveVisitsTable from './inactiveVisitsTable';
import VisitsTopbar from './visitsTopbar';

const Page = () => {
  const user: User = {
    fullname: 'Alicia Keys',
    email: 'alicia@krucialkeys.com',
  };

  const activeVisits: Visits[] = [
    {
      id: '00A1',
      visitor: 'James Bond',
      patient: 'Peter Bond',
      relation: 'Father',
      visit_start_time: '10:45 AM',
    },
    {
      id: '00A2',
      visitor: 'John Lennon',
      patient: 'Janet Lennon',
      relation: 'Mother',
      visit_start_time: '11:55 AM',
    },
    {
      id: '00A3',
      visitor: 'Alice Van Lent',
      patient: 'Arie van Lent',
      relation: 'Father',
      visit_start_time: '12:03 PM',
    },
    {
      id: '00A4',
      visitor: 'Philip Hoffman',
      patient: 'Anna Besson',
      relation: 'Friend',
      visit_start_time: '12:08 PM',
    },
    {
      id: '00A5',
      visitor: 'isabella Castillo',
      patient: 'Delia Díaz',
      relation: 'Aunt',
      visit_start_time: '13:46 PM',
    },
  ];

  const inactiveVisits: InactiveVisits[] = [
    {
      id: '10V1',
      visitor: 'Susan Peterson',
      patient: 'Luc Johnson',
      relation: 'Step father',
      visit_start_time: '09:32 AM',
      visit_end_time: '12:00 PM',
    },
    {
      id: '10V2',
      visitor: 'Adam Abdul Ibrahim',
      patient: 'Ahmed Muhammad Ibrahim',
      relation: 'Brother',
      visit_start_time: '10:15 AM',
      visit_end_time: '01:32 PM',
    },
    {
      id: '10V3',
      visitor: 'Sylvia Allen',
      patient: 'Jake Everly Allen',
      relation: 'Father',
      visit_start_time: '11:23 PM',
      visit_end_time: '12:12',
    },
    {
      id: '10V4',
      visitor: 'Erwin Koeman',
      patient: 'Ronald Koeman',
      relation: 'Uncle',
      visit_start_time: '12:08 PM',
      visit_end_time: '02:14 PM',
    },
    {
      id: '10V5',
      visitor: 'Anne-Marie Ayanru',
      patient: 'Jessica Simpson',
      relation: 'MOther',
      visit_start_time: '13:46 PM',
      visit_end_time: '03:48 PM',
    },
  ];

  return (
    <>
      <header className='bg-app_bg1'>
        <VisitsTopbar user={user} />
      </header>
      <div className='p-4'>
        <section className='flex items-center justify-between'>
          <h1 className='font-medium text-2xl'>
            {/* dynamically display this head based on content of first/only table */}
            Active Visits
          </h1>
          <CircleIconButton
            dropdownClases='dropdown-end'
            classes='hover:bg-app_primary hover:text-white'
            icon={<EllipsisIcon />}
          >
            <DropDownList>
              <li>
                <a>
                  <span>
                    <FilterIcon />
                  </span>
                  <span>Filter records</span>
                </a>
              </li>
              <li>
                <a>
                  <span>
                    <DeletedRecordIcon />
                  </span>
                  <span>Deleted records</span>
                </a>
              </li>
            </DropDownList>
          </CircleIconButton>
        </section>
        <div className='grid'>
          <section>
            <ActiveVisitsTable activeVisits={activeVisits} classes={'mb-10'} />
            <div>
              <h1 className='font-medium text-2xl'>
                {/* dynamically display this head based on content of first/only table */}
                Inctive Visits
              </h1>
              <InactiveVisitsTable inactiveVisits={inactiveVisits} />
            </div>
          </section>
          <aside>{/* side panel */}</aside>
          <section>{/* tabs section */}</section>
        </div>
      </div>
    </>
  );
};

export default Page;
