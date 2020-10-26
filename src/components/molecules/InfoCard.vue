<template>
  <div class="card">
    <div class="card__top" v-if="cardData">
      <div class="card__top__icon">
        <i :class="icon + ` card__top__icon card__top__icon${iconColor}`"></i>
      </div>
      <div class="card__top__info">
        <app-text :text="cardName" className="card__name" />
        <app-text
          :text="
            id === 'duration'
              ? Number(cardData).toFixed(2) + ' mins'
              : cardData
          "
        />
      </div>
    </div>
    <hr />
    <div class="card__bottom">
      <i class="far fa-undo-alt card__name undo"></i>
      <app-text :text="subName" className="card__name" />
    </div>
  </div>
</template>

<script>
import TextField from "../atoms/TextField";

export default {
  name: "InfoCard",
  components: {
    appText: TextField,
  },
  props: {
    id: String,
    iconColor: String,
    cardName: String,
    cardData: String,
    subName: String,
    icon: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 1rem;
  background-color: $bunting;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;

  &__name {
    color: $spun-pearl;
    font-size: 0.5em;
  }

  &__top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &__icon {
      border-radius: 9999px;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      &--apricot {
        background: $medium-purple;
        background-image: linear-gradient(20deg, $froly, $apricot);
      }
      &--purple {
        background: $medium-purple;
        background-image: linear-gradient(20deg, $medium-purple, $orchid);
      }
      &--turquois {
        background: $medium-purple;
        background-image: linear-gradient(
          20deg,
          $piction-blue,
          $aquamarine-blue
        );
      }
      &--red {
        background: $medium-purple;
        background-image: linear-gradient(20deg, $punch, $mandy);
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }

  &__bottom {
    display: flex;
    flex-direction: row;
  }

  .undo {
    margin-right: 0.7em;
  }
}
</style>
