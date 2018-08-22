<template>
  <div>
    <UsersTable>
      <template slot="header">
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Номер телефона</th>
        </tr>
      </template>

      <template
        slot="row"
        slot-scope="slotScope">
        <td>{{ slotScope.slotScope.name.first }}</td>
        <td>{{ slotScope.slotScope.name.last }}</td>
        <td>{{ slotScope.slotScope.phone }}</td>
      </template>
    </UsersTable>
  </div>
</template>

<script>
import UsersTable from '@/components/pages/UsersTable'

export default {
  name: 'PagePhoneList',
  components: {
    UsersTable
  }
}
</script>
