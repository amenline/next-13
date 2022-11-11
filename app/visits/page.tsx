import {
  CircleIconButton,
  DeletedRecordIcon,
  DeleteIcon,
  DropDownList,
  EllipsisIcon,
  FilterIcon,
} from '../../components';
import { User } from '../../types';
import VisitsTopbar from './visitsTopbar';

const Page = () => {
  const user: User = {
    fullname: 'Alicia Keys',
    email: 'alicia@krucialkeys.com',
  };

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
            {/* first table */}
            {/* second table */}
          </section>
          <aside>{/* side panel */}</aside>
          <section>{/* tabs section */}</section>
        </div>
      </div>
    </>
  );
};

export default Page;
