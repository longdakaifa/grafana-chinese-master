import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import UserInviteForm from './UserInviteForm';
import { contextSrv, NavModel } from 'app/core/core';
import { getNavModel } from 'app/core/selectors/navModel';
import { StoreState } from 'app/types/store';
import Page from 'app/core/components/Page/Page';

interface Props {
  navModel: NavModel;
}

export const UserInvitePage: FC<Props> = ({ navModel }) => {
  return (
    <Page navModel={navModel}>
      <Page.Contents>
        <h3 className="page-sub-heading">邀请用户</h3>
        <div className="p-b-2">
          向组织发送邀请或添加现有Grafana用户.
          <span className="highlight-word"> {contextSrv.user.orgName}</span>
        </div>
        <UserInviteForm />
      </Page.Contents>
    </Page>
  );
};

const mapStateToProps = (state: StoreState) => ({
  navModel: getNavModel(state.navIndex, 'users'),
});

export default hot(module)(connect(mapStateToProps)(UserInvitePage));
