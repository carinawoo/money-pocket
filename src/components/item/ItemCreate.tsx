import { defineComponent, PropType, ref } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import { Tabs, Tab } from '../../shared/Tabs';
import { InputPad } from './InputPad';
import s from './ItemCreate.module.scss';
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const refKind = ref('支出')
    const refExpensesTags = ref([
      { id: 1, name: '餐饮', sign: '￥', category: 'expenses' },
      { id: 2, name: '交通', sign: '￥', category: 'expenses' },
      { id: 3, name: '住房', sign: '￥', category: 'expenses' },
      { id: 4, name: '购物', sign: '￥', category: 'expenses' },
      { id: 5, name: '通讯', sign: '￥', category: 'expenses' },
      { id: 6, name: '还款', sign: '￥', category: 'expenses' },
      { id: 7, name: '红包', sign: '￥', category: 'expenses' },
    ])
    const refIncomeTags = ref([
      { id: 4, name: '薪资', sign: '￥', category: 'income' },
      { id: 5, name: '奖金', sign: '￥', category: 'income' },
      { id: 6, name: '股票', sign: '￥', category: 'income' },
      { id: 11, name: '退款', sign: '￥', category: 'income' },
      { id: 18, name: '意外', sign: '￥', category: 'income' },
      { id: 17, name: '租赁', sign: '￥', category: 'income' },
      { id: 19, name: '其他', sign: '￥', category: 'income' },
      { id: 4, name: '薪资', sign: '￥', category: 'income' },
      { id: 5, name: '奖金', sign: '￥', category: 'income' },
      { id: 6, name: '股票', sign: '￥', category: 'income' },
      { id: 11, name: '退款', sign: '￥', category: 'income' },
      { id: 18, name: '意外', sign: '￥', category: 'income' },
      { id: 17, name: '租赁', sign: '￥', category: 'income' },
      { id: 19, name: '其他', sign: '￥', category: 'income' },
      { id: 4, name: '薪资', sign: '￥', category: 'income' },
      { id: 5, name: '奖金', sign: '￥', category: 'income' },
      { id: 6, name: '股票', sign: '￥', category: 'income' },
      { id: 11, name: '退款', sign: '￥', category: 'income' },
      { id: 18, name: '意外', sign: '￥', category: 'income' },
      { id: 17, name: '租赁', sign: '￥', category: 'income' },
      { id: 19, name: '其他', sign: '￥', category: 'income' },
      { id: 4, name: '薪资', sign: '￥', category: 'income' },
      { id: 5, name: '奖金', sign: '￥', category: 'income' },
      { id: 6, name: '股票', sign: '￥', category: 'income' },
      { id: 11, name: '退款', sign: '￥', category: 'income' },
      { id: 18, name: '意外', sign: '￥', category: 'income' },
      { id: 17, name: '租赁', sign: '￥', category: 'income' },
      { id: 19, name: '其他', sign: '￥', category: 'income' },
      { id: 4, name: '薪资', sign: '￥', category: 'income' },
      { id: 5, name: '奖金', sign: '￥', category: 'income' },
      { id: 6, name: '股票', sign: '￥', category: 'income' },
      { id: 11, name: '退款', sign: '￥', category: 'income' },
      { id: 18, name: '意外', sign: '￥', category: 'income' },
      { id: 17, name: '租赁', sign: '￥', category: 'income' },
      { id: 19, name: '其他', sign: '￥', category: 'income' },
    ])
    return () => (
      <MainLayout class={s.layout}>{{
        title: () => '记一笔',
        icon: () => <Icon name="left" class={s.navIcon} />,
        default: () => <>
          <div class={s.wrapper}>
            <Tabs v-model:selected={refKind.value} class={s.tabs}>
              <Tab name="支出" class={s.tags_wrapper}>
                <div class={s.tag}>
                  <div class={s.sign}>
                    <Icon name="add" class={s.createTag} />
                  </div>
                  <div class={s.name}>
                    新增
                  </div>
                </div>
                {refExpensesTags.value.map(tag =>
                  <div class={[s.tag, s.selected]}>
                    <div class={s.sign}>
                      {tag.sign}
                    </div>
                    <div class={s.name}>
                      {tag.name}
                    </div>
                  </div>
                )}
              </Tab>
              <Tab name="收入" class={s.tags_wrapper}>
                <div class={s.tag}>
                  <div class={s.sign}>
                    <Icon name="add" class={s.createTag} />
                  </div>
                  <div class={s.name}>
                    新增
                  </div>
                </div>
                {refIncomeTags.value.map(tag =>
                  <div class={[s.tag, s.selected]}>
                    <div class={s.sign}>
                      {tag.sign}
                    </div>
                    <div class={s.name}>
                      {tag.name}
                    </div>
                  </div>
                )}
              </Tab>
            </Tabs>
            <div class={s.inputPad_wrapper}>
              <InputPad />
            </div>
          </div>
        </>
      }}</MainLayout>
    )
  }
})        