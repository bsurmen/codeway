<template>
  <div class="card">
    <div class="card__top" v-if="cardData">
      <div class="card__top__icon">
        <i :class="icon + ` card__top__icon card__top__icon${iconColor}`"></i>
      </div>
      <div class="card__top__info">
        <app-text :text="cardName" className="card__name" />
        <app-text
          :text="id === 'duration' ? convertToMinutes(cardData) : cardData"
        />
      </div>
    </div>
    <hr />
    <div class="card__bottom">
      <i class="far fa-undo-alt card__name"></i>
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
    cardData: [String, Number],
    subName: String,
    icon: String,
  },
  setup() {
    function convertToMinutes(data) {
      return Number(data).toFixed(2) + " mins";
    }

    return { convertToMinutes };
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
    margin-right: 0.7em;
  }

  &__top {
    @include flex {
      justify-content: space-between;
    }
    flex-direction: row;

    &__icon {
      @include flex;
      border-radius: 9999px;
      width: $info-icon;
      height: $info-icon;

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
      @include flex {
        align-items: flex-end;
        flex-direction: column;
      }
    }
  }

  &__bottom {
    @include flex {
      justify-content: flex-start;
    }
  }
}
</style>
