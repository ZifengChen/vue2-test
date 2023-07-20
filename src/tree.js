/*
 * @Author: czf
 * @Date: 2023-06-29 14:03:01
 * @LastEditors: czf
 * @LastEditTime: 2023-06-29 14:07:37
 * @FilePath: tree.js
 * @Description:
 */
async function treeList(target) {
  return new Promise((resolve) => {
    queryActiveFitBusinessList({ status: '' }).then((res) => {
      if (res.data.code === '200') {
        const scopedSlots = {
          title: 'custom',
          isPeople: false,
        };
        res.data.data.forEach((item) => {
          item.scopedSlots = scopedSlots;
          item.isPeople = false;
          item.show = false;
        });
      }
      const data = res.data;
      let dataList = this.recursionNode(data);
      this.treeData = this.filterDir(dataList);
      resolve(this.treeData);
    });
  });
}
