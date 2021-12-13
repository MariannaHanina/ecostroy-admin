<template>
  <v-form>
    <heading-level-2>Услуги</heading-level-2>
    <v-card>
      <v-img src="" />
      <v-card-text>
        <v-form>
          <v-text-field 
            label="Название сервиса"
            required
          />
          <v-file
            label="Иконка сервиса"
            required
          />
          <v-textarea 
            label="Краткое описание"
            required
          />
          <v-btn color="success">
            Сохранить
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-form>
</template>