<template>
  <q-layout view="hHh Lpr lfr">
    <q-header elevated>
      <q-toolbar>
        <q-icon class="q-mr-lg" name="settings" size="24px" />
        <q-tabs>
          <q-route-tab to="/" no-caps>Репосты</q-route-tab>
          <q-route-tab to="/users" no-caps>Пользователи</q-route-tab>
          <q-route-tab to="/groups" no-caps>Группы</q-route-tab>
        </q-tabs>
        <q-space />
        <q-btn flat label="Получить" @click="grab" no-caps />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />

      <q-page-sticky position="bottom-right" :offset="[3, 80]">
        <q-page-scroller
          position="bottom-right"
          :scroll-offset="200"
          :offset="[0, -70]"
        >
          <q-fab
            dense
            color="primary"
            glossy
            rounded
            icon="keyboard_arrow_up"
            @click="scrollTop"
          />
        </q-page-scroller>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import messageService from 'src/api/messages';
import { scroll } from 'quasar';

const q = useQuasar();

const scrollTop = () => {
  scroll.setVerticalScrollPosition(window, 0, 300);
};

const grab = async () => {
  await messageService.grab();
  q.notify({ message: 'Grab start', color: 'positive', position: 'top-right' });
};
</script>
