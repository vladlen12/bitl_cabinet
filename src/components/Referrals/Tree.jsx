import React from "react"
import {Progress, Table,} from 'antd';
import customer from "../../assets/icons/customer.svg";

const columns = [
  {
    title: 'Nickname',
    dataIndex: 'name',
    key: 'name',
    render: ([color, pic, percent, name, labelUser]) => (
      <div className="user-wrapper">
        <div className="user-info">
          <div className="user-pic">
            <Progress
              type="circle"
              strokeWidth={6}
              width={32}
              strokeColor={{
                '0': color,
              }}
              percent={percent}
              format={() => (
                <img src={pic} alt="pic"/>
              )}
            />
          </div>
          {name}
        </div>
        {labelUser ? <div className={`label ${labelUser}`}>{labelUser}</div> : ''}
      </div>
    ),
  },
  {
    title: 'BIO',
    dataIndex: 'bio',
    key: 'bio',
    width: '15%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: '7%',
    key: 'status',
    render: ([status, color]) => <div className={`label ${color}`}>{status} lvl</div>,
  },
  {
    title: 'line',
    dataIndex: 'line',
    width: '10%',
    key: 'line',
  },
  {
    title: 'partner',
    dataIndex: 'partner',
    width: '12%',
    key: 'partner',
  },
  {
    title: 'P.V.',
    dataIndex: 'pv',
    width: '6%',
    key: 'pv',
  },
  {
    title: 'G.V.',
    dataIndex: 'gv',
    width: '7%',
    key: 'gv',
  },
  {
    title: 'Sponsor',
    dataIndex: 'sponsor',
    width: '10%',
    key: 'sponsor',
    render: ([color, pic, percent, name]) => (
      <div className="user-info">
        <div className="user-pic">
          <Progress
            type="circle"
            strokeWidth={6}
            width={32}
            strokeColor={{
              '0': color,
            }}
            percent={percent}
            format={() => (
              <img src={pic} alt="pic"/>
            )}
          />
        </div>
        {name}
      </div>
    ),
  },
];

const data = [
  {
    key: 1,
    name: ['#5851FF', customer, 56, "william"],
    bio: "William Lawson",
    status: [7, 'label--7'],
    line: "-",
    partner: "50 | 37 | 10",
    pv: "30",
    gv: "200",
    sponsor: ['#F6339A', customer, 80, "maryjane"],
    children: [
      {
        className: "new",
        key: 12,
        name: ['#A6D4FF', customer, 48, "piterparker", "new"],
        bio: "William Lawson",
        status: [6, 'label--6'],
        line: "1",
        partner: "50 | 37 | 10",
        pv: "30",
        gv: "200",
        sponsor: ['#5851FF', customer, 56, "piterparker"],
        children: [
          {
            key: 124,
            name: ['#9A9BA2', customer, 8, "salmahayek"],
            bio: "Salma Hayek",
            status: [1, 'label--1'],
            line: "2",
            partner: "50 | 37 | 10",
            pv: "30",
            gv: "200",
            sponsor: ['#5851FF', customer, 56, "piterparker"],
            children: [
              {
                className: "children",
                key: 126,
                name: ['#FF5655', customer, 16, "sarasmit"],
                bio: "William Lawson",
                status: [2, 'label--2'],
                line: "3",
                partner: "50 | 37 | 10",
                pv: "30",
                gv: "200",
                sponsor: ['#5851FF', customer, 56, "piterparker"],
              },
              {
                className: "children",
                key: 126,
                name: ['#FF5655', customer, 16, "johndoe"],
                bio: "Piter Parker",
                status: [2, 'label--2'],
                line: "3",
                partner: "50 | 37 | 10",
                pv: "30",
                gv: "200",
                sponsor: ['#5851FF', customer, 56, "piterparker"],
              },
            ],
          },
          {
            key: 122,
            name: ['#FFB865', customer, 24, "piterparker"],
            bio: "William Lawson",
            status: [3, 'label--3'],
            line: "2",
            partner: "50 | 37 | 10",
            pv: "30",
            gv: "200",
            sponsor: ['#5851FF', customer, 56, "piterparker"],
            children: [
              {
                className: "children",
                key: 1211,
                name: ['#FF5655', customer, 16, "piterparker"],
                bio: "William Lawson",
                status: [2, 'label--2'],
                line: "4",
                partner: "50 | 37 | 10",
                pv: "30",
                gv: "200",
                sponsor: ['#5851FF', customer, 56, "piterparker"],
              },
              {
                className: "children",
                key: 12112,
                name: ['#FF5655', customer, 16, "piterparker"],
                bio: "William Lawson",
                status: [2, 'label--2'],
                line: "4",
                partner: "50 | 37 | 10",
                pv: "30",
                gv: "200",
                sponsor: ['#5851FF', customer, 56, "piterparker"],
              },
            ],
          },
        ],
      },
      {
        className: "deleted",
        key: 2,
        name: ['#A6D4FF', customer, 48, "piterparker", "deleted"],
        bio: "William Lawson",
        status: [6, 'label--6'],
        line: "--",
        partner: "-- | -- | --",
        pv: "--",
        gv: "--",
        sponsor: ['#5851FF', customer, 56, "piterparker"],
        children: [
          {
            key: 124,
            name: ['#9A9BA2', customer, 8, "piterparker"],
            bio: "William Lawson",
            status: [1, 'label--1'],
            line: "1",
            partner: "50 | 37 | 10",
            pv: "30",
            gv: "200",
            sponsor: ['#5851FF', customer, 56, "piterparker"],
          },
        ],
      },
      {
        className: "children-1",
        key: 3,
        name: ['#FFD965', customer, 32, "piterparker"],
        bio: "William Lawson",
        status: [4, 'label--4'],
        line: "2",
        partner: "50 | 37 | 10",
        pv: "30",
        gv: "200",
        sponsor: ['#5851FF', customer, 56, "piterparker"],
        children: [
          {
            key: 125,
            name: ['#9A9BA2', customer, 8, "piterparker"],
            bio: "William Lawson",
            status: [1, 'label--1'],
            line: "3",
            partner: "50 | 37 | 10",
            pv: "30",
            gv: "200",
            sponsor: ['#5851FF', customer, 56, "piterparker"],
          },
        ],
      },
    ],
  },
];


function TreeData() {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      hideSelectAll={true}
      // eslint-disable-next-line
      rowClassName={(record) => record.className === record.className ? record.className : "" }
      indentSize={36}
    />
  );
}

export default TreeData