import { Route, Redirect } from "react-router";
import React from "react";
import TodoPage from "./TodoPage";
import SettingsPage from "./SettingsPage";

import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";

// MOBX
import { observer } from "mobx-react";
import TabOneDetailPage from "./TabOneDetailPage";

const HomePage = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
      <Redirect exact path="/" to="/tabs/todo" />
      <Route path="/tabs/todo" render={()=><TodoPage />} exact={true}/>
      <Route path="/tabs/tab2-detail/:id" component={TabOneDetailPage} exact={true}/>
      <Route path="/tabs/settings"   render={()=><SettingsPage />} exact={true}/>
      
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/todo">
          <IonLabel>Todos</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/settings">
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default observer(HomePage);
